const mongoose= require("mongoose");

const restaurantScehma=new mongoose.Schema({
    name:String,
    location:String,
    ratings:String
})

const Restaurant=mongoose.model('restaurants',restaurantScehma);

module.exports=Restaurant;