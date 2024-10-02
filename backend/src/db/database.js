const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

mongoose.connect(process.env.MONGO_DB);

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    token : {
        type : String,
        required : true
    }
});

userSchema.methods.generateAuthToken = async function(){
    const user = this;

    user.token = jwt.sign({
        _id : user._id.toString()
    }, process.env.JWT_SECRET);

    return user.token;
}

const users = mongoose.model('users',userSchema);
module.exports = {users};