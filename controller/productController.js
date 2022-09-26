
//const productData = require("../data/productData.json");

const productModel = require('../models/productModel');


const returnSingleProduct = async(req, res) => {

    const productData = await productModel.find();
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
  }


const returnAllProducts = async(req, res) => {

    const productData = await productModel.find();

    const { category } = req.query;
    if (category) {
      const filteredProducts = productData.filter((product) => {
        return product.category === category;
      });
      res.json(filteredProducts);
    } else {
      res.json(productData);
    }
  }



const createProduct = async(req,res)=>{
    console.log(req.body);
    try{
    const result = await productModel.create(req.body);
    res.json(result);
    }
    catch(err){
      res.json(err);
    }
}

const updateProduct = async(req,res)=>{
  console.log(req.body);
  const { productID } = req.params;
  try{
    const result = await productModel.findByIdAndUpdate(productID, req.body);
    res.json(result);
  }catch(err){
    res.json(err);
  }
}
const deleteProduct = async(req,res)=>{
  const {productID} = req.params;
  try{
    const result = await productModel.findByIdAndDelete(productID);
    res.json(result);
  }catch(err){
    res.json(err);
  }
}


 
  module.exports = {returnAllProducts,
     returnSingleProduct,
     createProduct,
     updateProduct,
     deleteProduct
    };
