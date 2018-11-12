const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//Compilling our Schema into a model(Class) {object(document)}
module.exports = mongoose.model('Item', ItemSchema);