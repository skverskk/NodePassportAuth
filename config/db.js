const mongoose = require('mongoose');

module.exports = {
    // MongoDB Connection with Secret Key
    database: mongoose.connect('mongodb://' +
        process.env.MONGO_USERNAME +
        ':' +
        process.env.MONGO_PASSWORD +
        '@ds231758.mlab.com:31758/clients')
        .then(() => console.log('MongoDB is Connected'))
        .catch(err => console.log('Error: ', err)),
    secret: process.env.SECRET_KEY
}
