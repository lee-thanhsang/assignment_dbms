const config = require('../db/dbconfig');
const sql = require('mssql/msnodesqlv8');

exports.getAllCustomer = async function () {
    let pool = await sql.connect(config);
    return await pool.request().query(`SELECT * FROM customer`);
};

exports.getPointEmployee = async function (SSN) {
    let pool = await sql.connect(config);
    return await pool.request().query(`SELECT ((avg(Point_for_quality) + avg(Point_for_attitude))/2) as Point FROM rate_employee WHERE SSN='${SSN}'`);
};

exports.getInfoEmployee = async function (SSN) {
    let pool = await sql.connect(config);
    abc = { infomation: await pool.request().query(`SELECT * FROM employee WHERE SSN = '${SSN}'`) };
    return abc
};

exports.getAllEmployee = async function (SSN) {
    let pool = await sql.connect(config);
    return await pool.request().query(`SELECT * FROM employee`);
};

//Update
exports.updateEmployee = async function (content) {
    let pool = await sql.connect(config);
    await pool.request().query(`UPDATE employee SET ELastName='${content.ELastName}', EFirstName='${content.EFirstName}', Gender='${content.Gender}', BirthDay='${content.year}-${content.month}-${content.day}', Email='${content.Email}', NumberStreet='${content.NumberStreet}', Wards='${content.Wards}', District='${content.District}', City='${content.City}', PhoneNumber='${content.Phone}' WHERE SSN='${content.SSN}'`);
}

exports.getHistoryEmployee = async function (SSN) {
    let pool = await sql.connect(config);
    return {
        answer_question: await pool.request().query(`SELECT * FROM answer_question aq JOIN customer ON aq.CID = customer.CID WHERE aq.SSN = '${SSN}'`),
        contact_supplier: await pool.request().query(`SELECT * FROM contact JOIN supplier ON contact.SID = supplier.SID WHERE contact.SSN = '${SSN}'`),
    };
};

exports.getPromotion = async function () {
    let pool = await sql.connect(config);
    return {
        food: await pool.request().query(`SELECT * FROM promotion JOIN typeofgoods ON GName=Name WHERE typeofgoods.Type='Food';`),
        fashion: await pool.request().query(`SELECT * FROM promotion JOIN typeofgoods ON GName=Name WHERE typeofgoods.Type='Fashion';`),
        warehouse: await pool.request().query(`SELECT * FROM promotion JOIN typeofgoods ON GName=Name WHERE typeofgoods.Type='HouseWare';`),
        electronic: await pool.request().query(`SELECT * FROM promotion JOIN typeofgoods ON GName=Name WHERE typeofgoods.Type='Electronic';`)
    };
};

exports.getQuestionWithOutAnswer = async function () {
    let pool = await sql.connect(config);
    return await pool.request().query('SELECT * FROM answer_question aq JOIN customer ON aq.CID = customer.CID WHERE aq.SSN IS NULL');
};

exports.getQuestionWithOutAnswerSupplier = async function () {
    let pool = await sql.connect(config);
    return await pool.request().query('SELECT * FROM contact JOIN supplier ON contact.SID = supplier.SID WHERE SSN IS NULL');
};

exports.getRateForEmployee = async function (SSN) {
    let pool = await sql.connect(config);
    return await pool.request().query(`SELECT * FROM rate_employee JOIN customer ON customer.CID=rate_employee.CID WHERE rate_employee.SSN='${SSN}'`);
};

exports.addAnswer = async function (content) {
    let pool = await sql.connect(config);
    await pool.request().query(`UPDATE answer_question SET SSN='${content.SSN}', Answer='${content.Answer}', TimeAns='${new Date().toISOString().slice(0, 10)}' WHERE (CID='${content.CID}' AND Question='${content.Question}')`);
};

exports.addAnswerSupplier = async function (content) {
    let pool = await sql.connect(config);
    await pool.request().query(`UPDATE contact SET SSN='${content.SSN}', EmployeeContent='${content.Answer}', TimeAns='${new Date().toISOString().slice(0, 10)}' WHERE (SID='${content.SID}' AND SupplierContent='${content.Question}')`);
};