const express = require("express");
const { addRestaurant, getRestaurant, updateRestaurant, deleteRestaurant,getRestaurantById } = require("../handlers/restaurant-handlers");
const router = express.Router();


router.post("/", async (req, res) => {
    try{
        console.log("From resturant route");
    let model = req.body;
    let result = await addRestaurant(model);
    res.send(result);
    }
    catch(err){
        console.error("Error posting:", err);
    }
    
});
router.get("/", async (req, res) => {
    try {
        let result = await getRestaurant(); 
        res.json(result); // Use res.json() to send a proper response
    } catch (error) {
        console.error("Error fetching:", error);
        res.status(500).json({ error: "Failed to fetch restuarants" });
    }
});
router.get("/:id", async (req, res) => {
    try {
        let id = req.params["id"];
        let result = await getRestaurantById(id); 
        res.json(result); // Use res.json() to send a proper response
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ error: "Failed to fetch categories" });
    }
});


router.put("/:id", async (req, res) => {
    let model = req.body;
    let id = req.params["id"];
    let result = await updateRestaurant(id, model);
    res.send(result);
});

router.delete("/:id", async (req, res) => {
    let id = req.params["id"];
    await deleteRestaurant(id);
    res.send({ message: "deleted" });
});

module.exports = router;