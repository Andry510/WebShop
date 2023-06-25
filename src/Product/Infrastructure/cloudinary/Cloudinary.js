const { cloudinary } = require('../../Aplication/middlewares/Middleware')
const { CLOUD_NAME, API_KEY, API_SECRET } = require('../config/confing')


cloudinary.config({    
        cloud_name: CLOUD_NAME,
        api_key: API_KEY,
        api_secret: API_SECRET,
})

if (cloudinary.config().cloud_name) {
    console.log('Connection to Cloudinary');
} else {
    console.log('No se pudo establecer la conexión a Cloudinary');
}



