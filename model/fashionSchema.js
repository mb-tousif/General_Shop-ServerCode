import mongoose from "mongoose";

const fashionSchema = new mongoose.Schema({
  id: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});

const fashion = mongoose.model("fashion", fashionSchema);
export default fashion;