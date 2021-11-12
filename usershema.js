const mongo = require("mongoose")

const User = new mongo.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

})



module.exports = mongo.model("user", User)