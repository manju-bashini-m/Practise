const express=require('express');
const {addProduct, deleteProduct, updateProduct, getProduct, getProductById} = require('../handlers/product-handlers')
const router = express.Router();

router.get("/",async (req,res) => {
    let  result= await getProduct();

    res.json(result)
})
router.get("/:id", async (req, res) =>{
    let id=req.params["id"];
    let result= await getProductById(id);
    res.json(result);
})
router.put("/:id",async(req,res) => {
    let model=req.body;
    let id=req.params["id"];
    let result = await updateProduct(id,model);
    res.send(result);
})
router.post('/',async (req,res) => {
    let model=req.body;
    let result = await addProduct(model);
    res.send(result);
})
router.delete('/:id', async (req,res) => {
    let id = req.params["id"];
    await deleteProduct(id);
    res.send({ message: "deleted" });
})

module.exports=router;