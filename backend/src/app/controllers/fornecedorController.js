const restify    = require('restify');
const database = require('../../config/database/database');

//Get all fornecedores
const get = (req, res) => {
    database.query('SELECT * FROM fornecedores', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err)
    })
};

//Get an  ID fornecedores
const getById = (req, res) => {
    database.query('SELECT * FROM fornecedores WHERE idfornecedores = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};

//Delete an fornecedores
const remover = (req, res) => {
    database.query('DELETE FROM fornecedores WHERE idfornecedores = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
};

//Insert an fornecedores
const post =  (req, res) => {
    const {nome_fantasia, razao_social,rua, numero, bairro, cidade, telefone, email, cnpj} = req.body
    database.query('INSERT INTO fornecedores SET ?', {nome_fantasia, razao_social,rua, numero, bairro, cidade, telefone, email, cnpj },  (err) => {
     if (!err)
     res.send('Insert successfully.');
     else
     console.log(err);
   });
 };
 
 //Update an fornecedores
 const put =  (req, res) =>{
     const idfornecedores = parseInt(req.params.id);
     const nome_fantasia  = req.body.nome_fantasia
     const razao_social   = req.body.razao_social
     const rua            = req.body.rua
     const numero         = req.body.numero
     const bairro         = req.body.bairro
     const cidade         = req.body.cidade
     const telefone       = req.body.telefone
     const email          = req.body.email
     const cnpj           = req.body.cnpj
     database.query(`UPDATE fornecedores SET NOME_FANTASIA='${nome_fantasia}', RAZAO_SOCIAL='${razao_social}', RUA='${rua}',NUMERO       = '${numero}', BAIRRO = '${bairro}', CIDADE = '${cidade}', TELEFONE = '${telefone}', EMAIL = '${email}', CNPJ = '${cnpj}'
    WHERE IDFORNECEDOR = ${idfornecedor}`, (err) => {
         if (!err)
         res.send('Update successfully.');
         else
         console.log(err);
     });
 };

module.exports = {
     get, getById, remover,post, put
}