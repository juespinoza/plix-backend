// Express and security libraries
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialization and connection
const app = express();
const db_name = process.env.DATABASE_USER;
const db_password = process.env.DATABASE_PASSWORD;
const dbUrl = "mongodb+srv://plix_backend:8080@learning-cluster-46lvh.mongodb.net/plix?retryWrites=true&w=majority";
const options = { useNewUrlParser: true, connectTimeoutMS:20000, useUnifiedTopology: true };
const mongoose = require('mongoose');
mongoose.connect(dbUrl, options).then(
    () => { console.log('I am connected') },
    err => { console.log('Error: '+ err) }
);

// Routing
const apiRoutes = require('./api_routes');

// Connection config
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8080;
app.get('/', (req, res) => res.send('This is the API repository for Plix'));
app.use('/api', apiRoutes);
app.listen(port, () => { console.log('Running Plix backend on port: '+ port) });
