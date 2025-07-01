const mongoose=require("mongoose");

const categorySchema=new mongoose.Schema({
	name: String
});

app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

const Category=mongoose.model('categories',categorySchema);
module.exports=Category;