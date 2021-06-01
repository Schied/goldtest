const Products = require('../models/product');
var products = 0;
exports.loadProducts=(req,res,next)=>{
    Products.select();
    console.log('primero');
    next();
};
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};
exports.postAddProduct = (req, res, next) => {
    const product = new Products(req.body.title);
    product.insert();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    products = Products.fetchAll();
    console.log(products);
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
};

