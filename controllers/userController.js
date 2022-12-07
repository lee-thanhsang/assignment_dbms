var express = require('express');
var router = express.Router();

var customerModel = require('../models/userModel');

var mskh = "000905346";

router.get('/home', function(req, res) {
    // mskh = req.session.User.mskh;
    res.render("customer/home");
});

router.get('/logout', function(req, res) {
    delete req.session.User;
    res.redirect("login");
});

router.get('/contact', function(req, res) {
    res.render("customer/contact");
});

router.get('/promotion', async function(req, res) {
    let viewBag = await customerModel.getPromotion();
    viewBag['food'] = viewBag['food'].recordsets[0]
    viewBag['fashion'] = viewBag['fashion'].recordsets[0]
    viewBag['warehouse'] = viewBag['warehouse'].recordsets[0]
    viewBag['electronic'] = viewBag['electronic'].recordsets[0]
    for (let item of viewBag['fashion']) {
        if(item.Gender == 0){
            item.Gender = "Nam";
        }
        else{
            item.Gender = "Nữ";
        }
    }
    res.render("customer/promotion", viewBag);
});

router.get('/profile', async function(req, res) {
    let viewBag = await customerModel.getInfocustomer(mskh);

    viewBag["infomation"] = viewBag["infomation"].recordsets[0][0];
    viewBag['infomation'].BirthDay = viewBag['infomation'].BirthDay.toISOString().slice(0, 10);

    res.render("customer/profile/profile", viewBag);
});

router.post('/update-profile', async function(req, res){
    req.body.CID = mskh;
    await customerModel.updateCustomer(req.body);
    res.redirect("/profile");
})

router.get('/history', async function (req, res) {
    let viewBag = await customerModel.getHistoryCustomer(mskh);
    viewBag['question'] = viewBag['question'].recordsets[0]
    viewBag['join'] = viewBag['join'].recordsets[0]
    viewBag['rate_branch'] = viewBag['rate_branch'].recordsets[0]
    viewBag['rate_employee'] = viewBag['rate_employee'].recordsets[0]

    res.render("customer/profile/history", viewBag);
});

router.get('/questions', async function(req, res) {
    let viewBag = { ques_ans: await customerModel.getQuestionAnswer() };
    viewBag['ques_ans'] = viewBag['ques_ans'].recordsets[0]
    viewBag.ques_ans[0].TimeQues.toISOString().slice(0, 10)
    res.render("customer/questions", viewBag);
});

router.post("/add-question", async function(req, res){
    req.body.CID = mskh;
    customerModel.addQuestion(req.body);
    res.redirect("/questions");
});

router.get('/branch-services-rate', async function(req, res) {
    let viewBag = {branch_rate: await customerModel.getRateBranch(), branch_info: await customerModel.getBranch()};
    viewBag['branch_rate'] = viewBag['branch_rate'].recordsets[0]
    viewBag['branch_info'] = viewBag['branch_info'].recordsets[0]
    res.render("customer/about/branch-services-rate", viewBag);
});

router.post('/rate-branch', async function(req, res){
    req.body.CID = mskh;
    await customerModel.addRateBranch(req.body)
    res.redirect("/branch-services-rate");
});

router.get('/employee-rate', async function(req, res) {
    let viewBag = {employee_rate: await customerModel.getRateEmployee()};
    viewBag['employee_info'] = (await customerModel.getEmployee()).recordsets[0];
    viewBag['employee_rate'] = viewBag['employee_rate'].recordsets[0]
    res.render("customer/about/employee-rate", viewBag);
});

router.post('/rate-employee', async function(req, res){
    req.body.CID = mskh;
    await customerModel.addRateEmployee(req.body);
    res.redirect("/employee-rate");
});

module.exports = router;