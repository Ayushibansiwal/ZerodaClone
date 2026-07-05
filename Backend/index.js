import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();


const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;


async function main() {
    await mongoose.connect(MONGODB_URL);
    console.log("✅ Database connected successfully.");
}

main()
.then( ()=> {
    app.listen(PORT, () => {
      console.log(`🚀 Server listening on port ${PORT}`);
    });
})
.catch((err)=>{
    console.log(err);
})