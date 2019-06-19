const mongoose = require('mongoose');

// const config = require('config');
// const db = config.get('mongoURI');

const db = require('./default').mongoURI;


const connectDB = () =>{
    mongoose.connect(db)
            .then(() => console.log('MongoDB Connected'))
            .catch((err) => console.log(err));
}




module.exports = connectDB;