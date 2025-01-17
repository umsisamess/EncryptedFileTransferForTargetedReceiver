const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 12
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    publicKey: {
        type : String,
        required : true, 
    }
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;