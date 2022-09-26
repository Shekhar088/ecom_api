const mongoose = require('mongoose');

const connectDatabase = ()=>{
        mongoose.connect('mongodb://localhost:27017/ecom_test',(err)=>{
            if(err){
                console.log(err);
            }
            else{
            console.log("Database connected");
            }
        });
};

module.exports = connectDatabase;