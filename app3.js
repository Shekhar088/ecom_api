const express = require("express");
const PORT = 3000;

const cors = require('cors');

const app = express();

//Import the router
const productRouter = require('./routes/productRoute2');

//Database
const connectDatabase = require('./database/connection');


app.use( cors() );

//Require to access jsonData in POST function

app.use(express.json());



//Use route
app.use("/api/products",productRouter);


connectDatabase();



app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
