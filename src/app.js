// Declare and configure the server

const express = require("express");
const serverInstance = express();

serverInstance.get("/", (request, response) => {
	console.log("Someone visited the homepage of the server");

	response.json({
		message:"Hello world! Alex was here!"
	});
});

serverInstance.post("/", (request, response) => {

	response.json({
		message:"Received data:",
		requestData: request.body
	})
})

// Make the instance available for other files to use
module.exports = serverInstance;