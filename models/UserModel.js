const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    username: String,
    email: String,
    password: String,
});

const Users = mongoose.model('User', userSchema);
console.log('User Model was created');
module.exports = Users;