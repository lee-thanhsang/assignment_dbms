const connectToDatabase = require('../db/connection')

exports.getInfoSupplier = async function (SID) {
    const { cluster } = await connectToDatabase();
    return {
        infomation: (await cluster.query(`SELECT * FROM website_dbms._default.supplier WHERE SID = '${SID}'`)).rows[0].supplier
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

exports.getMyPromotion = async function (SID) {
    const { cluster } = await connectToDatabase();
    // await cluster.query("CREATE PRIMARY INDEX ON `default`:`website_dbms`.`_default`.`typeofgoods`");
    // return {
    //     food: await cluster.query(`SELECT * FROM promotion JOIN typeofgoods ON GName=Name WHERE typeofgoods.Type='Food' AND SID = ${SID};`),
    //     fashion: await cluster.query(`SELECT * FROM promotion JOIN typeofgoods ON GName=Name WHERE typeofgoods.Type='Fashion' AND SID = ${SID};`),
    //     warehouse: await cluster.query(`SELECT * FROM promotion JOIN typeofgoods ON GName=Name WHERE typeofgoods.Type='HouseWare' AND SID = ${SID};`),
    //     electronic: await cluster.query(`SELECT * FROM promotion JOIN typeofgoods ON GName=Name WHERE typeofgoods.Type='Electronic' AND SID = ${SID};`)
    // };
    return {
        food: [],
        fashion: [],
        warehouse: [],
        electronic: []
      }
};

exports.getContact = async function (SID) {
    const { cluster } = await connectToDatabase();
    let raw_allQuestion = await cluster.query(`SELECT * FROM website_dbms._default.contact WHERE SID = ${SID}`);
    raw_allQuestion = raw_allQuestion.rows;

    let allQuestion = []
    for (let index = 0; index < raw_allQuestion.length; index++) {
        allQuestion.push(raw_allQuestion[index].typeofgoods);
    }
    return allQuestion;
};

exports.getGoods = async function () {
    const { cluster } = await connectToDatabase();
    let raw_allGoods = await cluster.query("SELECT * FROM website_dbms._default.typeofgoods");
    raw_allGoods = raw_allGoods.rows;
    
    let allGoods = []
    for (let index = 0; index < raw_allGoods.length; index++) {
        allGoods.push(raw_allGoods[index].typeofgoods);
    }
    return allGoods;
};

// //ADD INTO DATABASE
exports.addPromotion = async function (content) {
    const { cluster } = await connectToDatabase();
    await cluster.query(`INSERT INTO website_dbms._default.promotion VALUES ("${content.PID}", "${content.PName}","${content.SID}", "${content.Type}", "${content.FromDate}", "${content.ToDate}", ${content.Percent}, "${content.Detail}", "${content.GName}")`);
}

exports.addContact = async function (content) {
    const { cluster } = await connectToDatabase();
    await cluster.query(`INSERT INTO website_dbms._default.contact (SID, SupplierContent, TimeQues) VALUES ("${content.SID}", "${content.message}", "${new Date()}")`);
}

//UPDATE
exports.updatePromotion = async function (content) {
    const { cluster } = await connectToDatabase();
    await cluster.query(`UPDATE website_dbms._default.promotion SET PName="${content.PName}", PType="${content.PType}", FromDate="${content.FromDate}", ToDate="${content.ToDate}", NumofPercentRedution="${content.Percent}", Infomation="${content.Detail}", GName="${content.GName}" WHERE SID="${content.SID}" and PID="${content.PID}"`);
}

exports.updateSupplier = async function (content) {
    const { cluster } = await connectToDatabase();
    await cluster.query(`UPDATE website_dbms._default.supplier SET SName="${content.SName}", BusinessAreas="${content.BusinessAreas}", Email="${content.Email}", NumberStreet="${content.NumberStreet}", Wards="${content.Wards}", District="${content.District}", City="${content.City}", PhoneNumber="${content.PhoneNumber}" WHERE SID="${content.SID}"`);
}

exports.deletePromotion = async function (content) {
    const { cluster } = await connectToDatabase();
    await cluster.query(`DELETE FROM website_dbms._default.promotion WHERE PID="${content.PID}" and SID="${content.SID}"`);
}
