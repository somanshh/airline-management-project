console.log("created this file using cmd terminal")

const express = require('express')
const bodyParser = require('body-parser')

//const PORT = require('./config/serverConfig.js');	// one way to handle
const envObj = require('../config/serverConfig.js'); 
const CityRepository = require('./repository/city-repository')

const PORT = envObj.PORT;
const NAME = envObj.NAME;

const createAndStartServer = async () => {

    // create a exp obj
    const server = express()

	// these are the middlewares , which will be called with each API call
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({extended: true}));
    
    server.listen( PORT , () => {
	console.log(`server started runnin at ${PORT}`)
		console.log( `seprate file made for .env package by ${NAME}`)
	// for creating city in db
	//const repo = new CityRepository();
	//repo.createCity({name: "New Delhi"});
	} )
	
}

createAndStartServer();
