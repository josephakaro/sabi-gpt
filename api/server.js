const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 3002;
const API_URL = process.env.API_URL;

const app = express()

app.get("/greeting",(req, res)=>{
	try{
		console.log(`Server ${PORT} Says Hello!`);
	} catch (error) {sx
	 console.error(error);
	}
});


app.listen(PORT,()=>{
    try {
        console.log(`Server is Running on: http://localhost:${PORT}`);
    } catch (error) {
       console.error(error); 
    }
});
