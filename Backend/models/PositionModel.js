import mongoose from "mongoose";
import PositionSchema from "../schema/PositionSchema";

const PositionModel = new mongoose.model("position",PositionSchema);

export default PositionModel ;