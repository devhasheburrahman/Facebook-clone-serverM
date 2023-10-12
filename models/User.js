const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    pass: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model("User", userSchema);