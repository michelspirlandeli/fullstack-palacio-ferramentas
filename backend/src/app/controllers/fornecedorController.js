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
const post = ('/fornecedores', (req, res) => {
    const {nome_fantasia, razao_social, email} = req.body
    database.query('INSERT INTO fornecedores SET ?', {nome_fantasia, razao_social, email },  (err) => {
     if (!err)
     res.send('Insert successfully.');
     else
     console.log(err);
   });
 });
 
 //Update an fornecedores
 const put = ('/fornecedores/:id', (req, res) =>{
     const idfornecedor  = parseInt(req.params.id);
     const nome_fantasia = req.body.nome_fantasia
     const razao_social  = req.body.razao_social
     const email         = req.body.email
     database.query(`UPDATE fornecedores SET NOME_FANTASIA='${nome_fantasia}', RAZAO_SOCIAL='${razao_social}', EMAIL='${email}'
      WHERE IDFORNECEDOR=${idfornecedor}`, (err) => {
         if (!err)
         res.send('Update successfully.');
         else
         console.log(err);
     });
 });

module.exports = {
     get, getById, remover,post, put
}