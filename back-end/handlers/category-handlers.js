const Category = require("../db/category.js");

async function addCategory(model) {
    let category = new Category({
        name: model.name,
    });
    await category.save();
    return category.toObject();
}
async function getCategory() {
    let categories= await Category.find();

    return categories.map(c => c.toObject());
}

async function getCategoryById(id) {
    let categories= await Category.findById(id);

    return categories.toObject();
}


async function updateCategory(id, model) {
    await Category.findOneAndUpdate({ _id: id }, model);
    return { message: "ok" };
}

async function deleteCategory(id) {
    await Category.findByIdAndDelete(id);
    return { message: "deleted" };
}

module.exports = { addCategory, getCategory, updateCategory, deleteCategory,getCategoryById };
