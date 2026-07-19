import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy";
dotenv.config();

const PORT=process.env.PORT;
const app = express();
app.use("/Auth",proxy(process.env.AUTH_PORT))

app.listen(PORT,()=>{
    console.log(`GateWay is running at ${PORT}`);
})