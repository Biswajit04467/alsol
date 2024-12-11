const mongoose = require('mongoose');



const visitSchema = new mongoose.Schema({
    ipAddress: String,

    timestamp: {
        type: Date,
        default: Date.now
    },
    browserInfo: String,
});
module.exports = mongoose.model('Visit', visitSchema);
