const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    username: String,
    email: String,
    comment: String,
    created: String,
});

const Comments = mongoose.model('Comment', commentSchema);
console.log('Comments Model was created');
module.exports = Comments;