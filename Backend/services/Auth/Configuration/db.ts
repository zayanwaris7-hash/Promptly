import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default async function ConnectDb(){
  try {
    await mongoose.connect(process.env.MONGOOSE_URL);
    console.log("MongoDB Connected");
  } catch (e) {
    console.error(e);
    process.exit(1);
    next(e);
  }
}