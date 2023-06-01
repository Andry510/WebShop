
const mongoose = require('mongoose');
const {DATABASE_URI} = require('../config/confing')

const ConnectionDataBase = mongoose.connect(DATABASE_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,        
}).then(() => {
    console.log('connection to database')
}).catch((err) => {
    console.error(err)
});

module.exports = ConnectionDataBase