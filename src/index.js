console.log("created this file using cmd terminal")

const express = require('express')
//const PORT = require('./config/serverConfig.js');
const envObj = require('./config/serverConfig.js');

const PORT = envObj.PORT;
const NAME = envObj.NAME;

// we have to require env package in order to use it
//require('dotenv').config()

const createAndStartServer = async () => {

    // create a exp obj
    const server = express()
    
    server.listen( PORT , () => {
	console.log(`server started runnin at ${PORT}`)
		console.log( `seprate file made for .env package by ${NAME}`)
	} )
	
}

createAndStartServer();
