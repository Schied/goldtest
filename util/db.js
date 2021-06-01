const mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'bd_libros'
  });
connection.connect(err => {
    if(err){
        throw err;
    }else{
        console.log('Conexion realizada');
    }
});
connection.end();


module.exports = connection;
