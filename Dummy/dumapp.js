const express = require("express");
const productData = require("../data/productData.json");
const PORT = 3000;

const app = express();

//Creating APIs
app.get("/api/products", (req, res) => {
  const { productID } = req.query;
  if (productID) {
    const selectedProducts = productData.filter((product) => {
      return product.category === category;
    });
    res.json(selectedProducts);
  } else {
    res.json(productData);
  }
});

//Get single product data using route parameters
app.get("/api/products/:category", (req, res) => {
  //1. Destructure productID from req.params
  const { category } = req.params;
  //2. Filter product from the array
  const filteredProduct = productData.filter((product) => {
    return product.category == category;
  });
  if (filteredProduct) {
    res.json(filteredProduct);
  } else {
    res.send("Index doesn't exist");
  }
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
