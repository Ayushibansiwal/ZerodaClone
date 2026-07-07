import mongoose from "mongoose";
import OrderSchema from "../schema/OrderSchema.js";

const OrderModel = new mongoose.model("order",OrderSchema);

export default OrderModel;