let router = require('express').Router();
let apiController = require('./controllers/apiController');

router.get('/', (request, response) => {
    response.json({
        status: 'The API is working',
        message: 'Welcome to Plix.',
    });
});
router.get('/readUser', (request, response) => {
    console.log("read");
    apiController.getUsers(request,response);
});
router.post('/readUser/?idUser', (request, response) => {
    console.log("read a single user");
    apiController.getUserById(request, response);
});
router.post('/createUser/User', (request, response) => {
    console.log(request.body);
    apiController.addUser(request, response);
});
router.post('/createUser/User', (request, response) => {
    console.log(request.body);
    apiController.addUser(request, response);
});
router.post('/updateUser/User', (request, response) => {
    apiController.updateUser(request, response);
});
router.delete('/deleteUser/User', (request, response) => {
    apiController.deleteUser(request, response);
});

// Export API routes
module.exports = router;