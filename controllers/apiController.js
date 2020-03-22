const Users = require('../models/UserModel');
const Comments = require('../models/CommentModel');
const bodyParser = require('body-parser');

let getUsers = (request, response) => {
    console.log('start reading');
    Users.find((err, usersList) => {
        response.status(200).send(usersList);
        (err) => {
            response.status(500).send(err);
            console.log(err);
        }
    });
};

let getUserById = (request, response) => {
    console.log("start reading an user");
    let findEmail = { email: request.body.findEmail };
    console.log(findEmail);
    Users.find(findEmail, (err, usersList) => {
        if (usersList.length > 0) {
            response.status(200).send(usersList);
            console.log(usersList);
        } else {
            if (usersList.length == 0) {
                response.status(200).send(usersList);
            }
        }
        if (err) {
            response.status(500).send(err);
            console.log(err);
        }
    })
      
};

let addUser = (request, response) => {
    console.log(request.body);
    var newUser = Users({
        name: request.body.name,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
    });
    newUser.save().then(
        (newUser) => {
            response.status(200).send(newUser);       
        },
        (err)=>{ 
            response.status(500).send(err);
            console.log(err);
        }
    ) 
}

let updateUser = (request, response) => {
    let findEmail = { email : request.body.findEmail};
    Users.findOneAndUpdate(
        { email : request.body.findEmail},
        { $set : {
            name: request.body.newData.name,
        }},
        { new: true }, 
            (err) => {
                response.status(200).send({ status: 'User updated' });
            (err) => { 
                response.status(500).send(err);
                console.log(err);
            }
        
        });
}

let deleteUser = (request, response) => {
    let findEmail = { dni : request.body.findEmail};
    Users.deleteOne(findEmail, (err) => {
        response.status(200).send({ estado: 'User deleted' });
        (err) => { 
            response.status(500).send(err);
            console.log(err);
        }      
    });
}

let getComments = (request, response) => {
    console.log('start reading');
    Comments.find((err, commentsList) => {
        response.status(200).send(commentsList);
        (err) => {
            response.status(500).send(err);
            console.log(err);
        }
    });
};

let getCommentById = (request, response) => {
    console.log("start reading an comment");
    let findEmail = { email: request.body.findEmail };
    console.log(findEmail);
    Comments.find(findEmail, (err, commentsList) => {
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

let addComment = (request, response) => {
    console.log(request.body);
    var newComment = Comments({
        username: request.body.username,
        comment: request.body.comment,
        email: request.body.email,
        created: '',
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

let deleteComment = (request, response) => {
    let findEmail = { dni : request.body.findEmail};
    Comments.deleteOne(findEmail, (err) => {
        response.status(200).send({ estado: 'User deleted' });
        (err) => { 
            response.status(500).send(err);
            console.log(err);
        }      
    });
}

module.exports = { getUsers, getUserById, addUser, updateUser, deleteUser, getComments, getCommentById, addComment, deleteComment };
