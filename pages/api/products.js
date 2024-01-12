import products from "../../data/Products";
import Product from "../../models/product";
import db from "../../utils/db";

async function handler(req, res) {
  await db.connect();

  await Product.deleteMany();

  await Product.insertMany(products);

  res.send({ message: "product aded." });
}

export default handler;
