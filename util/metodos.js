const mysql = require('mysql');
const products = [];

class crud{
    constructor(config){
        this.config = config;
    }
    insertar(){
        var con = mysql.createConnection(this.config);
        
        con.connect(err => {
            if (err) throw err;           
        })   
        con.query('SELECT * from libro', function (error, results, fields) {
                
            if (error) throw error;
            results.forEach(element => {
                products.push({ title: element.title });
            });
            return products;
          });         
        con.end();
    }
}

module.exports = crud;
