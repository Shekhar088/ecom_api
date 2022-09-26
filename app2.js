const express = require("express");
const productData = require("./data/productData.json");
const PORT = 3000;

const app = express();

//Creating APIs
app.get("/api/products", (req, res) => {
  const { category } = req.query;
  if (category) {
    const filteredProducts = productData.filter((product) => {
      return product.category === category;
    });
    res.json(filteredProducts);
  } else {
    res.json(productData);
  }
});

//Get single product data using route parameters
app.get("/api/products/:productID", (req, res) => {
  //1. Destructure productID from req.params
  const { productID } = req.params;
  //2. Filter product from the array
  const selectedProduct = productData.find((product) => {
    return product.id == productID;
  });
  if (selectedProduct) {
    res.json(selectedProduct);
  } else {
    res.send("Index doesn't exist");
  }
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
