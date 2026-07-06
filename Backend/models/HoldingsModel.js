import mongoose from "mongoose";
import HoldingSchema from "../schema/HoldingsSchema.js";

const HoldingsModel = new mongoose.model("holding",HoldingSchema);

export default HoldingsModel;