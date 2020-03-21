let router = require('express').Router();
let apiController = require('./controllers/apiController');

router.get('/', (request, response) => {
    response.json({
        status: 'The API is working',
        message: 'Welcome to Plix.',
    });
});
// Export API routes
module.exports = router;