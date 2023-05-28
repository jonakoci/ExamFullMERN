const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required:[true,"Name is required"]},
    lastName: { type: String, required:[true,"Image is required"] },
    email: { type: String, required:[true,"Image is required"]},
    password: {type: String, required:[true,"Number is required"]},
    confirmPass: {type: String, required:[true,"Number is required"]
}
  
}, 
{ timestamps: true });

module.exports = mongoose.model('User', UserSchema);