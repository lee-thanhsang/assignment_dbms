const config = require('../db/dbconfig');
const sql = require("mssql/msnodesqlv8");

exports.getRole = async function (account_name) {
    let pool = await sql.connect(config);
    return (await pool.request().query(`SELECT Account_pass, Role FROM role WHERE Account_Name = '${account_name}'`));
};

exports.updatePassword = async function (account, password) {
    let pool = await sql.connect(config);
    await pool.request().query(`UPDATE role SET Account_pass='${password}' WHERE Account_Name = '${account}'`);
};