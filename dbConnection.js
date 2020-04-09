const mysql = require('mysql');
const config = require('./config');
// Create connection

let connection = mysql.createConnection({
    host : config.database.host,
    user : config.database.user,
    password : config.database.password,
    database : config.database.db
});
connection.connect(function(error){
    if(!!error){
        console.log(error);
    }else{
        console.log('Connected!:)');
    }
});
module.exports = connection;
