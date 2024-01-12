import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";

import Product from "../models/product";
import db from "../utils/db";

export default function Home({ products }) {
  return (
    <Layout title={"Home Page"}>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
        {products.map(pItem => (
          <ProductItem item={pItem} key={pItem.slug}></ProductItem>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();

  const products = await Product.find().lean();

  return {
    props: { products: products.map(db.convertToObj) },
  };
}
