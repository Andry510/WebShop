const { getProducts, getProduct, insertProduct, updateProduct, deleteProduct} = require('../../Domain/services/webShopServices')
const { SendImage } = require('../../Domain/services/webShopServicesImg')
const schema = require('./validation/Schema')

const getAllProducts = async (req, res) =>{        
    try {
        const response =  await getProducts()    
        res.status(200).send({ status: 'OK', results: response})  

    } catch (error) {
        res.status(500).send({ status: 'Internal Server Error', error: error.message })        
    }
    
}

const getOneProduct = async (req, res) =>{    
    try {
        const { productId } = req.params

        const response = await getProduct(productId)        
        console.log(response)

        res.status(200).send({ status: 'OK', data: response})        
    } catch (error) {
        res.status(500).send({ status: 'Internal Server Error', error: error.message })
    }    
}

const createNewProduct =  async (req, res) => {     
    try {
        const { name, description, price, discount, category } = req.body 

        const photos = req.file   
        const  imgUrl = await SendImage(name, photos)                           
                                    
        const newProduct = { name, description, price, discount, category, imgUrl} 

        console.log(newProduct)
        const { error }  = schema.validate(newProduct)    
        if (error) return res.status(400).send({ status: 'Bad Request', data: error })
        
        const response = await insertProduct(newProduct)    

        res.status(201).send({ status: 'Created', result: response })        

    } catch (error) {

        res.status(500).send({ status: 'Internal Server Error', error: error.message})        
    }                        
}

const updateOneProduct = async (req, res) => {    
    try {
        const { productId } = req.params

        const response = await updateProduct(productId)
        res.status(200).send({ status: 'OK', response })
    } catch (error) {
        res.status(500).send({ status: 'Internal Server Error', error: error.message })        
    }        
}

const deleteOneProduct = async (req, res) =>{    
    try {
        const { productId } = req.params

        deleteProduct(productId)
        res.status(200).send({ status: 'OK', response })
        
    } catch (error) {
        res.status(500).send({ status: 'Internal Server Error', error: error.message})
    }
        
}

module.exports = {
    getAllProducts,
    getOneProduct,
    createNewProduct,
    updateOneProduct,
    deleteOneProduct
};