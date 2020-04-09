const express = require('express');
const router = express.Router();
const db = require('../../dbConnection'); //reference of dbconnection.js


// @route GET api/users
// @desc Get all users
// @access public
router.get('/', (req, res) => {
    let sql = 'SELECT * FROM users ORDER BY id DESC';

        db.query(sql,(err, rows,) => {

            if(err) throw err;
            console.log("users fetched");
            res.json(rows);
        })

});

// @route GET api/users/:id
// @desc Select one user
// @access public
router.get('/:id', (req, res) => {
    let sql = 'SELECT * FROM users where id = '+ req.params.id;

    db.query(sql,(err, rows,) => {

        if(err) throw err;
        console.log("user fetched");
        res.json(rows);
    })

});

// @route POST api/users/add
// @desc Add user
// @access public
router.post('/add', (req, res) => {
    // example of data
    let user = {name : 'ilyass', age : 23, email : "ilyass8janah@gmail.com"};
    let sql = 'INSERT into users SET ?';

    db.query(sql,user,(err, rows,) => {

        if(err) throw err;
        console.log("1 user added");
        res.json(rows);
    })

});

// @route POST api/users/update:id
// @desc Add user
// @access public
router.post('/update/:id', (req, res) => {
    // example of static update
    let Newname='janah';
    let sql = `UPDATE users SET name = '${Newname}' WHERE id= ${req.params.id}`;

    db.query(sql,(err, rows,) => {

        if(err) throw err;
        console.log("user updated");
        res.json(rows);
    })

});

// @route POST api/users/delete:id
// @desc delete user
// @access public
router.post('/delete/:id', (req, res) => {
    // example of static update
    let sql = `DELETE FROM users WHERE id= ${req.params.id}`;

    db.query(sql,(err, rows,) => {

        if(err) throw err;
        console.log("user deleted");
        res.json(rows);
    })

});

module.exports = router;
