const express = require("express");
const router = express.Router();
const { addCategory, updateCategory, deleteCategory, getCategory, getCategoryById } = require("./../handlers/category-handlers");

router.post("/", async (req, res) => {
    console.log("From category route");
    let model = req.body;
    let result = await addCategory(model);
    res.send(result);
});
router.get("/", async (req, res) => {
    try {
        let result = await getCategory(); 
        res.json(result); // Use res.json() to send a proper response
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ error: "Failed to fetch categories" });
    }
});
router.get("/:id", async (req, res) => {
    try {
        let id = req.params["id"];
        let result = await getCategoryById(id); 
        res.json(result); // Use res.json() to send a proper response
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ error: "Failed to fetch categories" });
    }
});


router.put("/:id", async (req, res) => {
    let model = req.body;
    let id = req.params["id"];
    let result = await updateCategory(id, model);
    res.send(result);
});

router.delete("/:id", async (req, res) => {
    let id = req.params["id"];
    await deleteCategory(id);
    res.send({ message: "deleted" });
});

module.exports = router;
