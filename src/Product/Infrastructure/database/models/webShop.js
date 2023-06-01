const { Schema, model } = require('mongoose')

const ProductsSchema = new Schema({        
    //Product 
    /*id: {

    },*/
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {    
        type: Number,
        required: true,
        min: 0
    },
    discount: {
        type: Number,        
        required: false,
        min: 0
    },    
    category: {
        type: String,
        required: true,
    },
    range: {
        type: Number,       
        default: 5,
    },

    imgUrl: {
        type: String,
        required: true,
    },

    date_create: { 
        type: Date,
        default: Date.now,
    }
    
},{ timestamps: true, })


const ProductModel = model('Products', ProductsSchema)

module.exports = ProductModel
