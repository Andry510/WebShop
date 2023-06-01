const { config }  = require('dotenv')

config()

//Port 
const PORT = process.env.APP_PORT || 3020

//Url the mongoosedb 
const DATABASE_URI = process.env.DATABASE_URI

//Key the Cloudinary 
const CLOUD_NAME = process.env.CLOUD_NAME
const API_KEY = process.env.API_KEY
const API_SECRET = process.env.API_SECRET
const FOLDEN_NAME = process.env.FOLDEN_NAME



module.exports = { PORT, DATABASE_URI, CLOUD_NAME, API_KEY, API_SECRET, FOLDEN_NAME }
