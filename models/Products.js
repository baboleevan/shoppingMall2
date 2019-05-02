import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "제품 이미지 필수"
  },
  name: {
    type: String,
    required: "제품명 필수"
  },
  price: {
    type: Number,
    required: "제품 가격 필수"
  },
  description: String,
  created_at: {
    type: Date,
    default: Date.now()
  }
});

const model = mongoose.model("Product", ProductsSchema);
export default model;
