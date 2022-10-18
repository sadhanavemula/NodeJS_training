var express = require('express');
var router = express.Router();
var connection = require('../configs/db.config')

//Getting All customers from Database
//Get API requset URL is http://localhost:3000/customers
router.get('/', function (req, res) {
    connection.query("select * from customers", (err, result) => {
        if (err) throw err;
        res.render('customers', {
            title: 'Cutomers List',
            customers: result
        });
    })
});

//Getting particular customer details from Database
router.get('/:id', function (req, res) {
    connection.query(`select * from customers where id=${req.params.id}`, (err, result) => {
        if (err) throw err;
        res.render('customer-detail', {
            id: result[0].id,
            name: result[0].name
        });
    })
});

// Edit customer data
router.get('/customer-edit/:id', function (req, res) {
    connection.query(`select * from customers where id=${req.params.id}`, (err, result) => {
        if (err) throw err;
        res.render('customer-edit', {
            id: result[0].id,
            name: result[0].name
        });
    })
});

//Update customer data
router.post('/customer-update/:id', function (req, res) {
    let customers_update_data = {
        id: req.body.id,
        name: req.body.name,
    }
    connection.query(`UPDATE customers SET ? where id=${req.params.id}`, customers_update_data, (err, result) => {
        if (err) throw err;
        //res.send('Customer details updated successfully');
        res.redirect('/customers');
    })
});

//Getting Form to add New Customer
//Get API requset URL is http://localhost:3000/customers/customer-add
router.get('/customer-add', function (req, res) {
        res.render('customer-add', {
            id: 0,
            name:''
        });
    })

    //Add New Customer to Database
router.post('/', function (req, res) {
    let customers_data = {
        id: req.body.id,
        name: req.body.name,
    }
    connection.query(`INSERT INTO customers SET ?`, customers_data, (err, result) => {
        if (err) throw err;
        //res.send('Customer added successfully');
        res.redirect('/customers');
    })
});

router.get('/customer-delete/:id', function (req, res) {
    connection.query(`delete from customers where id=${req.params.id}`, (err) => {
        if (err) throw err;
        res.redirect('/customers');
    })
});

module.exports = router;
