const restify    = require('restify');
const database = require('../../config/database/database');

//Get all users
const get = ('/users', (req, res) => {
    database.query('SELECT * FROM usuarios', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err)
    })
});


//Get an  users
const getById = ('/users/admin/:id', (req, res) => {
    database.query('SELECT * FROM usuarios WHERE idusuario = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});


//Delete an users
const remover = ('/users/:id', (req, res) => {
    database.query('DELETE FROM usuarios WHERE idusuario = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
});


//Insert an users


//Update an users


module.exports = {
     get, getById, remover
}