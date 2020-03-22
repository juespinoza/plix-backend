const Comments = require('../models/CommentModel');
const bodyParser = require('body-parser');

let getCommentsByMovieId = (request, response) => {
    let movieId = { movieId: request.body.movieId };
    Comments.find(movieId, (err, commentsList) => {
        if (commentsList.length > 0) {
            response.status(200).send(commentsList);
            console.log('getCommentsByMovieId response: ', commentsList);
        } else {
            if (commentsList.length === 0) {
                response.status(200).send(commentsList);
            }
        }
        if (err) {
            response.status(500).send(err);
            console.log('getCommentsByMovieId error', err);
        }
    });
};

let getCommentByUserEmail = (request, response) => {
    console.log("start reading an comment");
    let userEmail = { email: request.body.userEmail };
    console.log(userEmail);
    Comments.find(userEmail, (err, commentsList) => {
        if (commentsList.length > 0) {
            response.status(200).send(commentsList);
            console.log(commentsList);
        } else {
            if (commentsList.length == 0) {
                response.status(200).send(commentsList);
            }
        }
        if (err) {
            response.status(500).send(err);
            console.log(err);
        }
    })
};

let createComment = (request, response) => {
    console.log(request.body);
    var newComment = Comments({
        username: request.body.username,
        email: request.body.email,
        movieId: request.body.movieId,
        comment: request.body.comment,
        createdAt: request.body.createdAt,
    });
    newComment.save().then(
        (newComment) => {
            response.status(200).send(newComment);       
        },
        (err)=>{ 
            response.status(500).send(err);
            console.log(err);
        }
    ) 
} 

let deleteCommentByUserEmail = (request, response) => {
    let comment = { comment : request.body.comment, email: request.body.email };
    Comments.deleteOne(comment, (err) => {
        response.status(200).send({ status: 'Comment deleted' });
        (err) => { 
            response.status(500).send(err);
            console.log(err);
        }      
    });
}

module.exports = { getCommentsByMovieId, getCommentByUserEmail, createComment, deleteCommentByUserEmail };
