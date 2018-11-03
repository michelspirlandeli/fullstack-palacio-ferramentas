const restify    = require('restify');
const database = require('../../config/database/database');

//Get all users
const get =  (req, res) => {
    database.query('SELECT * FROM usuarios', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err)
    })
};

//Get an  users
const getById = (req, res) => {
    database.query('SELECT * FROM usuarios WHERE idusuario = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};

//Delete an users
const remover = (req, res) => {
    database.query('DELETE FROM usuarios WHERE idusuario = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
};

//Insert an users
const post =(req, res) => {
    const {nome, login, senha} = req.body
    database.query('INSERT INTO usuarios SET ?', {nome, login, senha },  (err) => {
     if (!err)
     res.send('Insert successfully.');
     else
     console.log(err);
   });
 };
 
 //Update an users
 const put = (req, res) =>{
     const idusuario = parseInt(req.params.id);
     const nome      = req.body.nome
     const login     = req.body.login
     const senha     = req.body.senha
     database.query(`UPDATE usuarios SET Nome='${nome}', LOGIN='${login}', SENHA='${senha}' WHERE IDUSUARIO=${idusuario}`, (err) => {
         if (!err)
         res.send('Update successfully.');
         else
         console.log(err);
     });
 };

module.exports = {
     get, getById, remover, post, put
}