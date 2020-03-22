const Users = require('../models/UserModel');
const bodyParser = require('body-parser');

let getUserByEmail = (request, response) => {
    console.log("start reading an user");
    let email = { email: request.body.email };
    console.log(email);
    Users.find(email, (err, usersList) => {
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

let createUser = (request, response) => {
    console.log(request.body);
    var newUser = Users({
        dni: request.body.dni,
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

module.exports = { getUserByEmail, createUser, updateUser, deleteUser };
