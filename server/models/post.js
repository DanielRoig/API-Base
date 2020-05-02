const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const postSchema = new Schema({

    message: {
        type: String,
        default: false
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('Post', postSchema, 'Post'); //La coleccion donde aplica en DB se especifica en el 3r parametro