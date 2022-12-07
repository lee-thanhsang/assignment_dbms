var express = require('express');
var router = express.Router();

var adminModel = require('../models/adminModel');


router.get('/home', function(req, res) {
    res.render("admin/layout");
});

router.get('/customer', async function(req, res) {
    let viewBag = {customerList: (await adminModel.getAllCustomer()).recordsets[0]};
    res.render("admin/customer", viewBag);
});

router.get('/employee', async function(req, res) {
    let viewBag = {employeeList: (await adminModel.getAllEmployee()).recordsets[0]};
    res.render("admin/employee", viewBag);
});

router.get('/supplier', async function(req, res) {
    let viewBag = {supplierList: (await adminModel.getAllSupplier()).recordsets[0]};
    res.render("admin/supplier", viewBag);
});

router.get('/branch', async function(req, res) {
    let viewBag = {branchList: (await adminModel.getAllBranch()).recordsets[0]};
    res.render("admin/branch", viewBag);
});

router.get('/promotion', async function(req, res) {
    let viewBag = await adminModel.getAllPromotion();
    viewBag['food'] = viewBag['food'].recordsets[0]
    viewBag['fashion'] = viewBag['fashion'].recordsets[0]
    viewBag['warehouse'] = viewBag['warehouse'].recordsets[0]
    viewBag['electronic'] = viewBag['electronic'].recordsets[0]
    res.render("admin/promotion", viewBag);
});

router.get('/delete/:id', async function(req, res) {
    //let viewBag = await adminModel.getAllPromotion();
    let arr = (req.params.id).split('-');
    let content = {id: arr[0], role: arr[1], SID: arr[2]};
    res.render("admin/delete", content);
});

router.post('/delete', async function(req, res){
    let id = req.body.id;
    let role = req.body.role;
    if(role == "customer"){
        await adminModel.deleteCustomer(id);
        res.redirect("/admin/customer");
    }
    else if(role == "employee"){
        await adminModel.deleteEmployee(id);
        res.redirect("/admin/employee");
    }
    else if(role == "supplier"){
        await adminModel.deleteSupplier(id);
        res.redirect("/admin/supplier");
    }
    else if(role == "branch"){
        await adminModel.deleteBranch(id);
        res.redirect("/admin/branch");
    }
    else{
        let SID = req.body.SID;
        await adminModel.deletePromotion(id, SID);
        res.redirect("/admin/promotion");
    }
});

module.exports = router;