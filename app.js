const express = require('express');
const mysql = require('mysql');

const app = express();
const users = require('./routes/api/users');

//Connect


//Use routes
app.use('/api/users',users);

const port = process.env.PORT || 5000;
app.listen(port, () =>
    console.log("server started on port "+port)
);
