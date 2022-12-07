const sql = require('mssql')
// config for your database
var config = {
    server: 'localhost',
    user: 'ADMIn\\Admin',
    password: '',
    database: 'DBMS_App',
    options: {
        trustedconnection:  true,
        enableArithAbort:  true,
        instancename:  'MSSQLSERVER'  // SQL Server instance name
    },

};

var connection = new sql.ConnectionPool(config).connect().then(pool => {
    return pool;
});

module.exports = {
    connection: connection,
    sql: sql
}
