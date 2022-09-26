const mongoose = require('mongoose');

const productSchema =mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:100
    },
    description:{
        type:String,
        required:true,
        minlength: 50
    },
    category:{
        type:String,
        required:true   
    },
    image:{
        type:String,
    },
    rating:{
        rate:{
            type:String
        },
        count:{
            type:Number
        }
    }

})

const productModel = mongoose.model('product', productSchema);

module.exports = productModel;
