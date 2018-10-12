var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    googleId: String
});

var UserModel = mongoose.Model('User', UserSchema);

module.exports = UserModel;
