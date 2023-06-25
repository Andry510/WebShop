const { sharp, fs, cloudinary }  = require('../../Aplication/middlewares/Middleware')
const { FOLDEN_NAME } = require('../../Infrastructure/config/confing')


const SendImage = async (name, photo) => {
  try { 
    if( name && photo)       
    {
      const imageBuffer = await sharp(photo.buffer).resize(400,400, {
        fit:'inside',      
      }).toBuffer()    
     
      const localFilePath = `./src/images/${name}.png`
      
      await fs.writeFileSync(localFilePath, imageBuffer);

      await cloudinary.uploader.upload(localFilePath, {folder: FOLDEN_NAME, public_id: name})          
      
      await fs.unlinkSync(localFilePath);

      const urlImg = cloudinary.url(`${FOLDEN_NAME}/${name}`, { transformation: [{ width: 500, height: 500, crop: 'fill' }] })      

  
      return  urlImg;

    }        

    return null

  } catch (error) {

    console.error(error)
    return null;

  }  
}

module.exports = { SendImage }