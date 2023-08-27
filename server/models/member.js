const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dataOfAccountCreation: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Member', memberSchema)