import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({});
const Order = models.Order || model("Order", OrderSchema);
export default Order;
