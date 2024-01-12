import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, require: true },
  price: { type: Number, require: true },
  slug: { type: String, require: true },
  description: { type: String, require: true },
  cat: { type: String, require: true },
  count: { type: Number, require: true, default: 0 },
  image: { type: String, require: true },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
