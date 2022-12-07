const config = require('../db/dbconfig');
const sql = require("mssql/msnodesqlv8");

exports.getInfoSupplier = async function (SID) {
    let pool = await sql.connect(config);
    return {
        infomation: await pool.request().query(`SELECT * FROM supplier WHERE SID = ${SID}`)
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

exports.getMyPromotion = async function (SID) {
    let pool = await sql.connect(config);
    return {
        food: await pool.request().query(`SELECT * FROM promotion JOIN typeofgoods ON GName=Name WHERE typeofgoods.Type='Food' AND SID = ${SID};`),
        fashion: await pool.request().query(`SELECT * FROM promotion JOIN typeofgoods ON GName=Name WHERE typeofgoods.Type='Fashion' AND SID = ${SID};`),
        warehouse: await pool.request().query(`SELECT * FROM promotion JOIN typeofgoods ON GName=Name WHERE typeofgoods.Type='HouseWare' AND SID = ${SID};`),
        electronic: await pool.request().query(`SELECT * FROM promotion JOIN typeofgoods ON GName=Name WHERE typeofgoods.Type='Electronic' AND SID = ${SID};`)
    };
};

exports.getContact = async function (SID) {
    let pool = await sql.connect(config);
    return await pool.request().query(`SELECT * FROM contact WHERE SID = ${SID}`);
};

exports.getGoods = async function () {
    let pool = await sql.connect(config);
    return await pool.request().query("SELECT * FROM typeofgoods");
};

// //ADD INTO DATABASE
exports.addPromotion = async function (content) {
    let pool = await sql.connect(config);
    await pool.request().query(`INSERT INTO promotion VALUES ("${content.PID}", "${content.PName}","${content.SID}", "${content.Type}", "${content.FromDate}", "${content.ToDate}", ${content.Percent}, "${content.Detail}", "${content.GName}")`);
}

exports.addContact = async function (content) {
    let pool = await sql.connect(config);
    await pool.request().query(`INSERT INTO contact (SID, SupplierContent, TimeQues) VALUES ("${content.SID}", "${content.message}", "${new Date().toISOString().slice(0, 10)}")`);
}

//UPDATE
exports.updatePromotion = async function (content) {
    let pool = await sql.connect(config);
    await pool.request().query(`UPDATE promotion SET PName="${content.PName}", PType="${content.PType}", FromDate="${content.FromDate}", ToDate="${content.ToDate}", NumofPercentRedution="${content.Percent}", Infomation="${content.Detail}", GName="${content.GName}" WHERE SID="${content.SID}" and PID="${content.PID}"`);
}

exports.updateSupplier = async function (content) {
    let pool = await sql.connect(config);
    await pool.request().query(`UPDATE supplier SET SName="${content.SName}", BusinessAreas="${content.BusinessAreas}", Email="${content.Email}", PhoneNumber="${content.PhoneNum1}", NumberStreet="${content.NumberStreet}", Wards="${content.Wards}", District="${content.District}", City="${content.City}" WHERE SID="${content.SID}"`);
}

exports.deletePromotion = async function (content) {
    let pool = await sql.connect(config);
    await pool.request().query(`DELETE FROM promotion WHERE PID="${content.PID}" and SID="${content.SID}"`);
}
