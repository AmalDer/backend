var express = require('express');

var router = express.Router();

var database = require('../database');

const bodyParser = require('body-parser')
router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

router.get("/", function(request, response, next){

	var query = "SELECT * FROM student ORDER BY idstudent ASC";

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('student', {title:'Node.js MySQL CRUD Application', action:'list', studentData:data});
		}

	});

});

//to add the group created to the database
router.get("/add", function(request, response, next){

	response.render("student", {title:'Insert Data into MySQL', action:'add'});

});

router.post("/add_student", function(request, response, next){
	console.log(request.body)
 	 var idstudent = request.body.idstudent;

	var iduser = request.body.iduser;

	var idgroup = request.body.idgroup; 

	var niveau = request.body.niveau;

	var nom = request.body.nom;

	var prenom = request.body.prenom;

	var email = request.body.email;

	var genie = request.body.genie;

	var query = `INSERT INTO student (idstudent,iduser,idgroup,niveau,nom,prenom,email,genie) VALUES ("${idstudent}","${iduser}","${idgroup}","${niveau}","${nom}","${prenom}","${email}","${genie}")`;
 

	/* const studentDetails = request.body;
	var sql = 'INSERT INTO student SET  ?';
	database.query(sql, studentDetails, function (err,data) {
		if(err) throw err;
		console.log("success");
		
	});
	response.redirect("/student"); */
	 database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}	
		else
		{
			response.redirect("/student");
		}

	}); 

});


module.exports = router;