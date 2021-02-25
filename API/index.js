var fs = require('fs');
var data = fs.readFileSync('api.json');
var employees = JSON.parse(data);
const express = require("express");
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(cors());
app.get('/employees', alldata);
app.get('/employees/:employee/', searchEmployee);

function alldata(request, response) {
	response.send(employees);
}

function searchEmployee(request, response) {
	var word = request.params.employee;
	word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
	console.log(word);
	if (employees[word]) {
		var reply = employees[word];
	}
	else {
		var reply = {
			status: "Not Found"
		}
	}
	console.log(reply.boil);
	response.send(reply);
}

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})