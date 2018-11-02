const restify    = require('restify');
const database = require('../../config/database/database');


//Get all products
const get = ('/products', (req, res) => {
    database.query('SELECT * FROM produtos', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err)
    })
});


//Get an  products
const getById = ('/products/admin/:id', (req, res) => {
    database.query('SELECT * FROM produtos WHERE idproduto = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Delete an products
const remover = ('/products/:id', (req, res) => {
    database.query('DELETE FROM produtos WHERE idproduto = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
});

//Insert an products
const post = ('/products', (req, res) => {
   const {nome, descricao} = req.body
   database.query('INSERT INTO produtos SET ?', {nome, descricao },  (err) => {
    if (!err)
    res.send('Insert successfully.');
    else
    console.log(err);
  });
});

//Update an products
const put = ('/products/:id', (req, res) =>{
    const idproduto = parseInt(req.params.id);
    const nome      = req.body.nome
    const descricao = req.body.descricao
    database.query(`UPDATE produtos SET Nome='${nome}', DESCRICAO='${descricao}' WHERE IDPRODUTO=${idproduto}`, (err) => {
        if (!err)
        res.send('Update successfully.');
        else
        console.log(err);
    });
});

module.exports = {
     get, getById, remover,post, put
}