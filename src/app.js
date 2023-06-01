//Imports 
const { express, cors, morgan, multer} = require('./Product/Aplication/middlewares/Middleware');

const v1WebShopRouter = require('./Product/Aplication/v1/routes/webShopRouter')
const {PORT} = require('./Product/Infrastructure/config/confing.js')


//Initialize
const app = express()

//Settings
const port = PORT   
 
//Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())


//Routers
app.use('/webshop/v1/products', multer({storage: multer.memoryStorage()}).single('photos',4), v1WebShopRouter)


// Start server
require('./Product/Infrastructure/database/webShopDataBase');
require('./Product/Infrastructure/cloudinary/Cloudinary')

module.exports = {app, port}
