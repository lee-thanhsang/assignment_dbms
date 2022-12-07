const connectToDatabase = require('../db/connection');

exports.getAllCustomer = async function () {
	const { cluster } = await connectToDatabase();  let raw_allCustomer = await cluster.query(`SELECT * FROM website_dbms._default.customer`);
	raw_allCustomer = raw_allCustomer.rows;
	
	let allCustomer = []
	for (let index = 0; index < raw_allCustomer.length; index++) {
		allCustomer.push(raw_allCustomer[index].customer);
	}
	return allCustomer;
};

exports.getPointEmployee = async function (SSN) {
	const { cluster } = await connectToDatabase();
	let result = (await cluster.query(`SELECT Point_for_quality, Point_for_attitude FROM website_dbms._default.rate_employee WHERE SSN='${SSN}'`)).rows;
	
	let sum = 0;
	for (let index = 0; index < result.length; index++) {
		sum += parseInt(result[index].Point_for_attitude) + parseInt(result[index].Point_for_quality);
	}

	return sum / (2 * result.length);

};

exports.getInfoEmployee = async function (SSN) {
	const { cluster } = await connectToDatabase();
	return {
		infomation: (await cluster.query(`SELECT * FROM website_dbms._default.employee WHERE SSN = '${SSN}'`)).rows[0].employee
	};
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

//Update
exports.updateEmployee = async function (content) {
    const { cluster } = await connectToDatabase();
	await cluster.query(
		`UPDATE website_dbms._default.employee SET 
		ELastName='${content.ELastName}', 
		EFirstName='${content.EFirstName}', 
		Gender='${content.Gender}', 
		BirthDay='${content.year}-${content.month}-${content.day}', 
		Email='${content.Email}', 
		NumberStreet='${content.NumberStreet}', 
		Wards='${content.Wards}', 
		District='${content.District}', 
		City='${content.City}', 
		PhoneNumber='${content.Phone}' 
		WHERE SSN='${content.SSN}'`
	);
}

exports.getHistoryEmployee = async function (SSN) {
	return {
		answer_question: [],
		contact_supplier: []
	};
};

exports.getPromotion = async function () {
  const { cluster } = await connectToDatabase();
  // await cluster.query("CREATE PRIMARY INDEX ON `default`:`website_dbms`.`_default`.`promotion`")
    // return {
    //     food: await cluster.query(`SELECT * FROM website_dbms._default.promotion as promotion JOIN website_dbms._default.typeofgoods as typeofgoods ON promotion.GName=typeofgoods.Name WHERE typeofgoods.Type='Food';`),
    //     fashion: await cluster.query(`SELECT * FROM website_dbms._default.promotion JOIN typeofgoods ON GName=Name WHERE typeofgoods.Type='Fashion';`),
    //     warehouse: await cluster.query(`SELECT * FROM website_dbms._default.promotion JOIN typeofgoods ON GName=Name WHERE typeofgoods.Type='HouseWare';`),
    //     electronic: await cluster.query(`SELECT * FROM website_dbms._default.promotion JOIN typeofgoods ON GName=Name WHERE typeofgoods.Type='Electronic';`)
    // };
  return {
    food: [],
    fashion: [],
    warehouse: [],
    electronic: []
  }
};

exports.getQuestionWithOutAnswer = async function () {
  const { cluster } = await connectToDatabase();
  let raw_allQuestion = await cluster.query('SELECT * FROM website_dbms._default.answer_question WHERE SSN IS NULL');
  raw_allQuestion = raw_allQuestion.rows;
  let allQuestion = []
  for (let index = 0; index < raw_allQuestion.length; index++) {
    allQuestion.push(raw_allQuestion[index].answer_question);
  }
  return allQuestion;
};

exports.getQuestionWithOutAnswerSupplier = async function () {
    const { cluster } = await connectToDatabase();
	let raw_allQuestion = await cluster.query('SELECT * FROM website_dbms._default.contact WHERE SSN IS NULL');
	raw_allQuestion = raw_allQuestion.rows;

	let allQuestion = []
    for (let index = 0; index < raw_allQuestion.length; index++) {
      allQuestion.push(raw_allQuestion[index].answer_question);
    }
    return allQuestion;
};

exports.getRateForEmployee = async function (SSN) {
    const { cluster } = await connectToDatabase();
	let raw_rate_employee = await cluster.query(`SELECT * FROM website_dbms._default.rate_employee WHERE SSN='${SSN}'`);
	raw_rate_employee = raw_rate_employee.rows;
	
    let allEmployeeRate = []
    for (let index = 0; index < raw_rate_employee.length; index++) {
      allEmployeeRate.push(raw_rate_employee[index].rate_employee);
	}
	
    return allEmployeeRate;
};

exports.addAnswer = async function (content) {
  const { cluster } = await connectToDatabase();
  await cluster.query(`UPDATE website_dbms._default.answer_question SET SSN='${content.SSN}', Answer='${content.Answer}', TimeAns='${new Date().toISOString().slice(0, 10)}' WHERE (CID='${content.CID}' AND Question='${content.Question}')`);
};

exports.addAnswerSupplier = async function (content) {
  const { cluster } = await connectToDatabase();
  
    await cluster.query(`UPDATE website_dbms._default.contact SET SSN='${content.SSN}', EmployeeContent='${content.Answer}', TimeAns='${new Date().toISOString().slice(0, 10)}' WHERE (SID='${content.SID}' AND SupplierContent='${content.Question}')`);
};
