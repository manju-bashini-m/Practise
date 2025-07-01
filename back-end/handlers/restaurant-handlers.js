const Restaurant=require("../db/restaurant.js")

async function addRestaurant(model) {
    let restaurant = new Restaurant({
        name: model.name,
        location:model.location,
        ratings:model.ratings
    });
    await restaurant.save();
    return restaurant.toObject();
}
async function getRestaurant() {
    let restaurant= await Restaurant.find();
    return restaurant.map(c => c.toObject());
}

async function getRestaurantById(id) {
    let restaurant= await Restaurant.findById(id);

    return restaurant.toObject();
}


async function updateRestaurant(id, model) {
    await Restaurant.findOneAndUpdate({ _id: id }, model);
    return { message: "ok" };
}

async function deleteRestaurant(id) {
    await Restaurant.findByIdAndDelete(id);
    return { message: "deleted" };
}

module.exports = { addRestaurant, getRestaurant, updateRestaurant, deleteRestaurant,getRestaurantById };
