const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
}, {
    versionKey: false
});

module.exports = mongoose.model('User', userSchema, 'User'); //La coleccion donde aplica en DB se especifica en el 3r parametro