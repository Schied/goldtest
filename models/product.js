var products = [];
const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_libros'
});
connection.connect();
module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    insert(){
        connection.query(`INSERT INTO libro VALUES ('${this.title}')`, function (error, results, fields) {
            if (error) throw error;        
          });          
    }


    static select() {       
        connection.query('SELECT * from libro',  (error, results, fields) => {
            products = [];
            if (error) throw error;
            for (const key in results) {       
                var title = results[key].title;
                products.push({title: title});
            }   
          });        
    }

    static fetchAll() {
        return products;
    }
}