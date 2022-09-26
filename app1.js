const express = require('express');
const productData = require('./data/productData.json');
const PORT = 3000;

const app = express();

//Create APi
app.get('/api/products', (req,res)=>{
    res.json(productData);
})

app.listen(PORT, ()=>{
    console.log(`Server at ${PORT}`);
})