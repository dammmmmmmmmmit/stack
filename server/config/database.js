const mongoose =require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log('mongo connected');
    }catch(error){
        console.error('mongo connect fail', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;