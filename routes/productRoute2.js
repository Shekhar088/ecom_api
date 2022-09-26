
const express= require('express');
const router = express.Router();



const { returnAllProducts,
      returnSingleProduct,
      createProduct,
      updateProduct,
      deleteProduct} = require('../controller/productController'); 

//Creating APIs
router.get("/", returnAllProducts);
  
  //Get single product data using route parameters
router.get("/:productID", returnSingleProduct );

router.post('/', createProduct);
router.patch('/:productID', updateProduct);
router.delete('/:productID', deleteProduct);


module.exports = router;

