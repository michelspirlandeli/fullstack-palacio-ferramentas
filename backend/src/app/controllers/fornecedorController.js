const restify    = require('restify');
const database = require('../../config/database/database');

//Get all fornecedores
const get = ('/fornecedores', (req, res) => {
    database.query('SELECT * FROM fornecedores', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err)
    })
});


//Get an  ID fornecedores
const getById = ('/fornecedores/admin/:id', (req, res) => {
    database.query('SELECT * FROM fornecedores WHERE idfornecedor = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});


//Delete an fornecedores
const remover = ('/fornecedores/:id', (req, res) => {
    database.query('DELETE FROM fornecedores WHERE idfornecedor = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
});

//Insert an fornecedores


//Update an fornecedores


module.exports = {
     get, getById, remover
}