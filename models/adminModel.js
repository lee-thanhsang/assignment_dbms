const config = require('../db/dbconfig');
const sql = require("mssql/msnodesqlv8");

exports.getAllCustomer = async function () {
    let pool = await sql.connect(config);
    return await pool.request().query(`SELECT * FROM customer`);
};

exports.getAllEmployee = async function () {
    let pool = await sql.connect(config);
    return await pool.request().query(`SELECT * FROM employee`);
};

exports.getAllSupplier = async function () {
    let pool = await sql.connect(config);
    return await pool.request().query(`SELECT * FROM supplier`);
};

exports.getAllBranch = async function () {
    let pool = await sql.connect(config);
    return await pool.request().query(`SELECT * FROM branch`);
};

exports.getAllCustomer = async function (SSN) {
    let pool = await sql.connect(config);
    return await pool.request().query(`SELECT * FROM customer`);
};

exports.getAllPromotion = async function () {
    let pool = await sql.connect(config);
    return {
        food: await pool.request().query(`SELECT * FROM promotion JOIN typeofgoods ON GName=Name WHERE typeofgoods.Type='Food';`),
        fashion: await pool.request().query(`SELECT * FROM promotion JOIN typeofgoods ON GName=Name WHERE typeofgoods.Type='Fashion';`),
        warehouse: await pool.request().query(`SELECT * FROM promotion JOIN typeofgoods ON GName=Name WHERE typeofgoods.Type='HouseWare';`),
        electronic: await pool.request().query(`SELECT * FROM promotion JOIN typeofgoods ON GName=Name WHERE typeofgoods.Type='Electronic';`)
    };
};

exports.deleteCustomer = async function (id) {
    let pool = await sql.connect(config);
    await pool.request().query(`DELETE FROM customer WHERE CID=${id}`);
};

exports.deleteEmployee = async function (id) {
    let pool = await sql.connect(config);
    await pool.request().query(`DELETE FROM employee WHERE SSN=${id}`);
};

exports.deleteSupplier = async function (id) {
    let pool = await sql.connect(config);
    await pool.request().query(`DELETE FROM supplier WHERE SID=${id}`);
};

exports.deletePromotion = async function (name, SID) {
    let pool = await sql.connect(config);
    await pool.request().query(`DELETE FROM promotion WHERE PName="${name}" AND SID=${SID}`);
};

exports.deleteBranch = async function (id) {
    let pool = await sql.connect(config);
    await pool.request().query(`DELETE FROM branch WHERE BID=${id}`);
};