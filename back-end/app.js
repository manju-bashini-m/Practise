const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

const cors=require('cors');

const categoryRoutes = require("./routes/category");
const restaurantRoutes=require("./routes/restaurant");
const productRoutes=require("./routes/product");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.use("/category", categoryRoutes);
app.use("/restaurant",restaurantRoutes);
app.use("/product",productRoutes);

async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/database");
        console.log("Connected to DB");
    } catch (err) {
        console.error("Error connecting to DB:", err);
        process.exit(1);
    }
}

connectDB();

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
