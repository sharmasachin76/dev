const express = require("express");
const mongo = require("mongoose");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
mongo.connect(
  "mongodb://localhost:27017/pms",
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("DB Connected");
  }
);

let productSchema = new mongo.Schema({
  name: String,
  price: Number,
  quantity: Number,
  color: String,
  category: String,
  description: String,
  rating: Number,
});

let productModel = new mongo.model("products", productSchema);

// fetch products
app.get("/products", async (req, res) => {
  let products = await productModel.find();
  //   let products = await productModel.find({ rating: 4.5 });
  res.send(products);
});

// create product
app.post("/products", (req, res) => {
  let product = req.body;
  let prodObj = new productModel(product);
  prodObj.save();
  console.log(product);
  res.send({ message: "product created", product: prodObj });
});

// delete product
app.delete("/products/:id", async (req, res) => {
  console.log(req.params.id);
  await productModel.deleteOne({ _id: req.params.id });
  res.send({ message: "Product Deleted" });
});

// update product
app.put("/products/:id", async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  console.log(data);
  console.log(id);

  await productModel.updateOne({ _id: id }, { $set: data });
  res.send("Product updated");
});

// help screen
app.get("/help", (req, res) => {
  res.send("Help Page");
});

app.listen(8000, () => {
  console.log("server is running...");
});
