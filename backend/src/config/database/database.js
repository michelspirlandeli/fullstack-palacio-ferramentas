const mysql = require('mysql');

const connection = mysql.createConnection ({
        host    : 'localhost',
        user    : 'root',
        password: 'root',
        database: 'db_palacio_ferramentas'
});

module.exports = connection


