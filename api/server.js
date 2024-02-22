const express = require("express");
const dotenv = require("dotenv");


dotenv.config();

const PORT = process.env.PORT || 3002


const app = express()



app.listen(PORT,()=>{
    try {
        console.log("Server is Running...")
    } catch (error) {
        
    }
});