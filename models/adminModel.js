const connectToDatabase = require('../db/connection');

exports.getAllCustomer = async function () {
    const { cluster } = await connectToDatabase();
    let raw_allCustomer = await cluster.query(`SELECT * FROM website_dbms._default.customer`);
    raw_allCustomer = raw_allCustomer.rows;
    let allCustomer = []
    for (let index = 0; index < raw_allCustomer.length; index++) {
        allCustomer.push(raw_allCustomer[index].customer);
    }
    return allCustomer;
};

exports.getAllEmployee = async function () {
    const { cluster } = await connectToDatabase();
    let raw_allEmployee = await cluster.query(`SELECT * FROM website_dbms._default.employee`);
    raw_allEmployee = raw_allEmployee.rows;
    let allEmployee = []
    for (let index = 0; index < raw_allEmployee.length; index++) {
        allEmployee.push(raw_allEmployee[index].employee);
    }
    return allEmployee;
    
};

exports.getAllSupplier = async function () {
    const { cluster } = await connectToDatabase();
    let raw_allSupplier = await cluster.query(`SELECT * FROM website_dbms._default.supplier`);
    raw_allSupplier = raw_allSupplier.rows;
    let allSupplier = []
    for (let index = 0; index < raw_allSupplier.length; index++) {
        allSupplier.push(raw_allSupplier[index].supplier);
    }
    return allSupplier;
};

exports.getAllBranch = async function () {
    const { cluster } = await connectToDatabase();
    let raw_allBranch = await cluster.query(`SELECT * FROM website_dbms._default.branch`);
    raw_allBranch = raw_allBranch.rows;
    let allBranch = []
    for (let index = 0; index < raw_allBranch.length; index++) {
        allBranch.push(raw_allBranch[index].branch);
    }
    return allBranch;
};

exports.getAllPromotion = async function () {
    const { cluster } = await connectToDatabase();
    // return {
    //     food: await cluster.query(`SELECT * FROM promotion JOIN typeofgoods ON GName=Name WHERE typeofgoods.Type='Food';`),
    //     fashion: await cluster.query(`SELECT * FROM promotion JOIN typeofgoods ON GName=Name WHERE typeofgoods.Type='Fashion';`),
    //     warehouse: await cluster.query(`SELECT * FROM promotion JOIN typeofgoods ON GName=Name WHERE typeofgoods.Type='HouseWare';`),
    //     electronic: await cluster.query(`SELECT * FROM promotion JOIN typeofgoods ON GName=Name WHERE typeofgoods.Type='Electronic';`)
    // };
    return {
        food: [],
        fashion: [],
        warehouse: [],
        electronic: []
      }
};

exports.deleteCustomer = async function (id) {
    const { cluster } = await connectToDatabase();
    await cluster.query(`DELETE FROM website_dbms._default.customer WHERE CID='${id}'`);
};

exports.deleteEmployee = async function (id) {
    const { cluster } = await connectToDatabase();
    await cluster.query(`DELETE FROM website_dbms._default.employee WHERE SSN='${id}'`);
};

exports.deleteSupplier = async function (id) {
    const { cluster } = await connectToDatabase();
    await cluster.query(`DELETE FROM website_dbms._default.supplier WHERE SID='${id}'`);
};

exports.deletePromotion = async function (name, SID) {
    const { cluster } = await connectToDatabase();
    await cluster.query(`DELETE FROM website_dbms._default.promotion WHERE PName="${name}" AND SID='${SID}'`);
};

exports.deleteBranch = async function (id) {
    const { cluster } = await connectToDatabase();
    await cluster.query(`DELETE FROM website_dbms._default.branch WHERE BID='${id}'`);
};
