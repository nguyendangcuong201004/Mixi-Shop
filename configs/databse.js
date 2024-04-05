const mongoose = require('mongoose');

module.exports.connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connect Database Successful!")
    }
    catch(error){
        console.log("Connect Database Error!!!")
        console.log(error);
    }
}

