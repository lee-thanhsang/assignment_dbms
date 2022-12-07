const connectToDatabase = require('../db/connection');

exports.getRole = async function (account_name) {
    const { cluster } = await connectToDatabase();
    let result = await cluster.query(`SELECT * FROM website_dbms._default.user_role WHERE Account_Name = '${account_name}'`);
    return result.rows[0].user_role;
};

exports.updatePassword = async function (account, password) {
    const { cluster } = await connectToDatabase();
    await cluster.query(`UPDATE role SET Account_pass='${password}' WHERE Account_Name = '${account}'`);
};
