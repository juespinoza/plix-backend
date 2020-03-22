let router = require('express').Router();
let UserController = require('./controllers/UserController');
let CommentController = require('./controllers/CommentController');

router.get('/', (request, response) => {
    response.json({
        status: 'The API is working',
        message: 'Welcome to Plix.',
    });
});

// Users
router.post('/userLogin/User', (request, response) => {
    console.log("getting user for login: ", request.body);
    UserController.getUserForLogin(request, response);
});
router.post('/userByEmail/User', (request, response) => {
    console.log("getting user: ", request.body);
    UserController.getUserByEmail(request, response);
});
router.post('/createUser/User', (request, response) => {
    console.log('creating user: ', request.body);
    UserController.createUser(request, response);
});
router.post('/updateUser/User', (request, response) => {
    UserController.updateUser(request, response);
});
router.delete('/deleteUser/User', (request, response) => {
    UserController.deleteUser(request, response);
});

// Comments
router.post('/commentByMovie/Comment', (request, response) => {
    console.log('getting comment: ', request.body);
    CommentController.getCommentsByMovieId(request, response);
});
router.post('/commentByUser/Comment', (request, response) => {
    console.log('getting comment: ', request.body);
    CommentController.getCommentByUserEmail(request, response);
});
router.post('/createComment/Comment', (request, response) => {
    console.log('creating comment: ', request.body);
    CommentController.createComment(request, response);
});
router.delete('/deleteComment/Comment', (request, response) => {
    console.log('deleting comment: ', request.body);
    CommentController.deleteCommentByUserEmail(request, response);
});


// Export API routes
module.exports = router;