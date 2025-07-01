const Product = require("../db/product");

async function addProduct(model) {
    let product = new Product({
        name: model.name,
        shortdescription: model.shortdescription,
        description:model.description,
        price:model.price,
        discount:model.discount,
        // sellingPrice:model.sellingPrice,
        ratings:model.ratings,
        categoryId:model.categoryId,
        restaurantId:model.restaurantId
    })

    await product.save();
    return product.toObject();
}

async function updateProduct(id,model){
    await Product.findOneAndUpdate({_id:id},model);
}

async function getProduct(){
    let product= await Product.find();
    return product.map((p) => p.toObject())
}

async function getProductById(id){
    let product = await Product.findById(id);
    return product.toObject();
}

async function deleteProduct(id){
    await Product.findByIdAndDelete(id);
}

module.exports={addProduct, deleteProduct, updateProduct, getProduct, getProductById}