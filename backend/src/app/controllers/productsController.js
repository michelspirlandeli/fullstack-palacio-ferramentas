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
    database.query('SELECT * FROM produtos WHERE idprodutos = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});
//Delete an products
const remover = ('/products/:id', (req, res) => {
    database.query('DELETE FROM produtos WHERE idprodutos = ?', [req.params.id], (err, rows, fields) => {
        console.log(req.params);

        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
});

//Insert an products
const post = ('/products', (req, res) => {
   const {nome, descricao, quantidade, valor} = req.body
   database.query('INSERT INTO produtos SET ?', {nome, descricao, quantidade, valor },  (err) => {
    if (!err)
    res.send('Insert successfully.');
    else
    console.log(err);
  });
});

//Update an products
const put = ('/products/:id', (req, res) =>{
    const idprodutos = parseInt(req.params.id);
    const nome       = req.body.nome
    const descricao  = req.body.descricao
    const quantidade = req.body.quantidade
    const valor      = req.body.valor
    database.query(`UPDATE produtos SET Nome='${nome}', DESCRICAO='${descricao}',  QUANTIDADE='${quantidade}',  VALOR='${valor}'WHERE IDPRODUTOS=${idprodutos}`, (err) => {
        if (!err)
        res.send('Update successfully.');
        else
        console.log(err);
    });
});

module.exports = {
     get, getById, remover,post, put
}