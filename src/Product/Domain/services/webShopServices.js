const ProductModel = require('../../Infrastructure/database/models/webShop');


const getProducts = async () => { 
    try {
        const response = await ProductModel.find()            
        return response;    

    } catch (error) {
        return Promise.reject(error)        
    }    
}
const getProduct = async ( productId ) => {    
    try {
        const response = await ProductModel.findById(productId)        
        console.log(response)
        
        return response
    } catch (error) {
        return Promise.reject(error)        
    }    
}
const insertProduct = async ( newProduct ) =>{
    try {
        const product = new ProductModel(newProduct)    

        await product.save().then(savedProduct => {
            console.log('Producto guardado:', savedProduct);
          })
          .catch(error => {
            console.error('Error al guardar el producto:', error);
          });
        
    } catch (error) {        
        return 'error'     
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