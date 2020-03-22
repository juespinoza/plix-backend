const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    username: String,
    email: String,
    movieId: String,
    comment: String,
    createdAt: Date,
});

const Comments = mongoose.model('Comment', commentSchema);
console.log('Comments Model was created');
module.exports = Comments;