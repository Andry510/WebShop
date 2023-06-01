const { express } = require('../../middlewares/Middleware')
const router = express.Router()
const {getAllProducts, getOneProduct, createNewProduct, updateOneProduct, deleteOneProduct} = require('../../controllers/webShopController')


router
    .get('/', getAllProducts)
    .get('/:productId', getOneProduct)
    .post('/create', createNewProduct)
    .patch('/:productId', updateOneProduct)
    .delete('/:productId', deleteOneProduct)

module.exports = router