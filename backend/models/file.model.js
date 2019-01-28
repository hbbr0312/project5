const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Files = new Schema({
    user_id: {
        type: String
    },
    filename: {
        type: String
    },
    date: {
        type: String
    }
});

module.exports= mongoose.model('Files',Files);