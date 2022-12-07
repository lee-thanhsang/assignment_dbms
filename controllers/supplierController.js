var express = require('express');
var router = express.Router();

const supplierModel = require("../models/supplierModel");

var msdn = "128312118";

router.get('/home', function(req, res) {
    // msdn = req.session.User.msdn;
    res.render("supplier/home");
});

router.get('/profile', async function(req, res) {
    let viewBag = await supplierModel.getInfoSupplier(msdn);
    viewBag["infomation"] = viewBag["infomation"].recordsets[0][0];
    
    res.render("supplier/profile/profile", viewBag);
});

router.get('/contact', function(req, res) {
    res.render("supplier/contact");
});

router.get('/promotion', async function(req, res) {
    let viewBag = await supplierModel.getPromotion();
    viewBag['food'] = viewBag['food'].recordsets[0]
    viewBag['fashion'] = viewBag['fashion'].recordsets[0]
    viewBag['warehouse'] = viewBag['warehouse'].recordsets[0]
    viewBag['electronic'] = viewBag['electronic'].recordsets[0]

    for(let item of viewBag['fashion']){
        if(item.Gender == 0){
            item.Gender = "Nam";
        }
        else{
            item.Gender = "Nữ";
        }
    }
    res.render("supplier/promotion/promotion", viewBag);
});

router.get('/my-promotion', async function(req, res) {
    let viewBag = await supplierModel.getMyPromotion(msdn);
    viewBag['food'] = viewBag['food'].recordsets[0]
    viewBag['fashion'] = viewBag['fashion'].recordsets[0]
    viewBag['warehouse'] = viewBag['warehouse'].recordsets[0]
    viewBag['electronic'] = viewBag['electronic'].recordsets[0]
    viewBag['Goods'] = (await supplierModel.getGoods()).recordsets[0];

    res.render("supplier/promotion/my_promotion", viewBag);
});

router.get('/history', async function(req, res) {
    let viewBag = (await supplierModel.getContact(msdn)).recordsets[0];
    res.render("supplier/profile/history", {contact: viewBag});
});

router.post('/update-info-supplier', async function(req, res){
    let content = req.body;
    content['SID'] = msdn;

    supplierModel.updateSupplier(req.body);
    res.redirect('/supplier/profile');
});

router.post('/add-promotion', async function(req, res){
    content = req.body;
    content['SID'] = msdn;
    supplierModel.addPromotion(req.body);

    res.redirect('/supplier/my-promotion');
});

router.post('/add-contact', async function(req, res){
    content = req.body;
    content['SID'] = msdn;
    supplierModel.addContact(req.body);
    res.redirect('/supplier/contact');
});

router.post('/update-promotion', async function(req, res){
    content = req.body;
    content['SID'] = msdn;
    
    await supplierModel.updatePromotion(content)

    res.redirect('/supplier/my-promotion');
});

router.post('/delete-promotion', async function(req, res){
    content = req.body;
    content['SID'] = msdn;
    supplierModel.deletePromotion(content);
    res.redirect('/supplier/my-promotion');
});

module.exports = router;