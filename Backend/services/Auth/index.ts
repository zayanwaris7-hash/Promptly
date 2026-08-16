import express from "express";
import dotenv from "dotenv";
dotenv.config();
import ConnectDb from "./Configuration/db.js";

const PORT=process.env.PORT;
const app = express();
app.listen(PORT,()=>{
    console.log(`Auth is running at ${PORT}`);
    ConnectDb();
})