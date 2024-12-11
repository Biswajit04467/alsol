const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
    mongoose.connect(process.env.DATABASE_URL).then(() => {
        console.log("DB connection is succesfull !");
    }).catch((err) => {
        console.log("Failed to connect DB-", err)
    })

}

module.exports={dbConnect};
