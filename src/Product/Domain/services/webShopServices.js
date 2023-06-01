const ProductModel = require('../../Infrastructure/database/models/webShop');

const getProducts = async () => { 
    try {
        const response = await ProductModel
        return response.products;    
    } catch (error) {
        return Promise.reject(error)        
    }    
}
const getProduct = async ( productId ) => {    
    try {
        const response = await ProductModel.find(({ id }) => id == productId)
        return response
    } catch (error) {
        return Promise.reject(error)        
    }    
}
const insertProduct = async ( newProduct ) =>{
    try {
        const response = await ProductModel.create( newProduct )    
        return response;
    } catch (error) {
        return Promise.reject(error)        
    }    
}
const updateProduct = async ( productId ) => {
    try {
        const response = await ProductModel.update( productId )
        return response;
    } catch (error) {
        return Promise.reject(error)        
    }    
        
}
const deleteProduct = async ( productId ) => {
    try {
        const response = await ProductModel.delete( productId )    
        return response;
    } catch (error) {
        return Promise.reject(error)        
    }            
}

module.exports = {getProducts, getProduct, insertProduct, updateProduct, deleteProduct,} 