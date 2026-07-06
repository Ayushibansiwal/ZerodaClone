import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

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

// Route | Work with Dummy Data 
app.get("/addPositions",async(req,res)=>{
    const positions = [
  {
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: 316.27,
    price: 312.35,
    net: "+0.58%",
    day: "-1.24%",
    isLoss: true,
  },
  {
    product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: true,
  },
]
   try {
       await PositionModel.insertMany(positions);
        res.send("positions added successfully!");
   } catch (error) {
    console.log(error);
   }
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