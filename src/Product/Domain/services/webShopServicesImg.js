const { cloudinary}  = require('../../Aplication/middlewares/Middleware')
const { FLODEN_NAME } = require('../../Infrastructure/config/confing')


const GetImage = ( imgId ) => {
    
}

const SendImage = (id, nameImg) => {
  try {    
    cloudinary.uploader.upload('https://picsum.photos/640/640?r=8230', {folder: FLODEN_NAME, public_id: id})
  } catch (error) {
    console.error(error)
  }  
}

module.exports = {
    GetImage,
    SendImage,
}