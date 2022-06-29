var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

	var query = "SELECT * FROM group ORDER BY idgroup ASC";

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('group', {title:'Node.js MySQL CRUD Application', action:'list', groupData:data});
		}

	});

});
router.get("/add", function(request, response, next){

	response.render("group", {title:'Insert Data into MySQL', action:'add'});

});

module.exports = router;