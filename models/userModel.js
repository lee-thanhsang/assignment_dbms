const connectToDatabase = require('../db/connection');

exports.getInfocustomer = async function (CID) {
    const { cluster } = await connectToDatabase();
    let result = await cluster.query(`SELECT * FROM website_dbms._default.customer WHERE CID = '${CID}'`);
    
    return {
        infomation: result.rows[0].customer
    }
};

exports.getPromotion = async function () {
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

exports.getQuestionAnswer = async function () {
    const { cluster } = await connectToDatabase();
    let raw_allQuestion = await cluster.query(`SELECT * FROM website_dbms._default.answer_question WHERE NOT Answer = 'NULL'`);
    
    raw_allQuestion = raw_allQuestion.rows;
    let allQuestion = []
    for (let index = 0; index < raw_allQuestion.length; index++) {
        allQuestion.push(raw_allQuestion[index].answer_question);
    }

    return allQuestion;
};

exports.getRateBranch = async function () {
    const { cluster } = await connectToDatabase();
    // await cluster.query('CREATE PRIMARY INDEX ON `default`:`website_dbms`.`_default`.`rate_branch`');
    let raw_rate_branch = await cluster.query('SELECT * FROM website_dbms._default.rate_branch WHERE rate_branch.Point > 6');

    raw_rate_branch = raw_rate_branch.rows;
    let all_rate_branch = []
    for (let index = 0; index < raw_rate_branch.length; index++) {
        all_rate_branch.push(raw_rate_branch[index].rate_branch);
    }

    return all_rate_branch;
};

exports.getRateEmployee = async function () {
    const { cluster } = await connectToDatabase();
    let raw_rate_employee = await cluster.query('SELECT * FROM website_dbms._default.rate_employee WHERE Point_for_quality > 6 AND Point_for_attitude > 6;');
    raw_rate_employee = raw_rate_employee.rows;
    let all_rate_employee = []
    for (let index = 0; index < raw_rate_employee.length; index++) {
        all_rate_employee.push(raw_rate_employee[index].rate_employee);
    }

    return all_rate_employee;
};

exports.getHistoryCustomer = async function (CID) {
    const { cluster } = await connectToDatabase();
    return {
        question: (await cluster.query(`SELECT Question, Answer, SSN, TimeQues as Time, TimeAns FROM website_dbms._default.answer_question;`)).rows,
        join: (await cluster.query(`SELECT * FROM website_dbms._default.join_in;`)).rows,
        rate_branch: (await cluster.query(`SELECT BID, Point, Time, Detail FROM website_dbms._default.rate_branch;`)).rows,
        rate_employee: (await cluster.query(`SELECT ELastName, EFirstName, Point_for_quality, Point_for_attitude, Time, Detail, SSN FROM website_dbms._default.rate_employee WHERE CID = '${CID}'`)).rows
    };
};

exports.getBranch = async function () {
    const { cluster } = await connectToDatabase();
    return (await cluster.query('SELECT Name, BID FROM website_dbms._default.branch')).rows;
};

exports.getEmployee = async function () {
    const { cluster } = await connectToDatabase();
    return (await cluster.query('SELECT SSN, ELastName, EFirstName FROM website_dbms._default.employee')).rows;
};

//Update
exports.updateCustomer = async function (content) {
    const { cluster } = await connectToDatabase();
    await cluster.query(`UPDATE website_dbms._default.customer SET LastName='${content.LastName}', FirstName='${content.FirstName}', Gender='${content.Gender}', BirthDay='${content.year}-${content.month}-${content.day}', Email='${content.Email}', PhoneNumber='${content.Phone1}', NumberStreet='${content.NumberStreet}', Wards='${content.Wards}', District='${content.District}', City='${content.City}' WHERE CID='${content.CID}'`);
}

//ADD INTO DATABASE
exports.addRateBranch = async function (content) {
    const { cluster } = await connectToDatabase();
    await cluster.query(`INSERT INTO website_dbms._default.rate_branch VALUES ('${content.branch}', '${content.CID}', '${content.message}', ${parseInt(content.point)}, '${new Date().toISOString().slice(0, 10)}')`);
}

exports.addRateEmployee = async function (content) {
    const { cluster } = await connectToDatabase();
    await cluster.query(`INSERT INTO website_dbms._default.rate_employee VALUES ('${content.CID}', '${content.employee}', '${new Date().toISOString().slice(0, 10)}', '${content.message}', ${parseInt(content.point_quality)}, ${parseInt(content.point_attitude)})`);
}

exports.addQuestion = async function (content) {
    const { cluster } = await connectToDatabase();
    await cluster.query(`INSERT INTO website_dbms._default.answer_question (CID, TimeQues, Question) VALUES ('${content.CID}', '${new Date()}', '${content.message}')`);
}