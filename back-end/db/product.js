const mongoose=require("mongoose");

const {Schema} = mongoose;

const productSchema=new mongoose.Schema({
	name: String,
	shortdescription: String,
	description:String,
	price:Number,
	discount:Number,
	ratings:String,
	categoryId:[{type:Schema.Types.ObjectId,ref:'categories'}],
	restaurantId:[{type:Schema.Types.ObjectId,ref:'restaurants'}]
});

const Product=mongoose.model('products',productSchema);
module.exports=Product;