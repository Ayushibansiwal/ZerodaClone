import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

// Models
import HoldingsModel from "./models/HoldingsModel.js";
import PositionModel from "./models/PositionModel.js";

dotenv.config();

const app = express();


const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;


async function main() {
    await mongoose.connect(MONGODB_URL);
    console.log("✅ Database connected successfully.");
}

app.use(cors());
app.use(bodyParser.json());

// Fetching Data from DB
app.get("/allHoldings",async(req,res)=>{
    const allHoldings = await HoldingsModel.find();
    res.send(allHoldings);
})
app.get("/allPositions",async(req,res)=>{
    const allPositions = await PositionModel.find();
    res.send(allPositions);
})


main()
.then( ()=> {
    app.listen(PORT, () => {
      console.log(`🚀 Server listening on port ${PORT}`);
    });
})
.catch((err)=>{
    console.log(err);
})