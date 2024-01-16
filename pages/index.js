import { useContext } from "react";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";

import Product from "../models/product";
import db from "../utils/db";
import { CartContext } from "../context/Cart";
import { toast } from "react-toastify";

export default function Home({ products }) {
  const { state, dispatch } = useContext(CartContext);

  const { cart } = state;

  function addToCartHandler(product) {
    const exisitingItem = cart.cartItem.find(i => i.slug === product.slug);

    const qty = exisitingItem ? exisitingItem.qty + 1 : 1;

    dispatch({ type: "ADD_ITEMS", payload: { ...product, qty } });

    toast.success("product added");
  }
  return (
    <Layout title={"Home Page"}>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
        {products.map(pItem => (
          <ProductItem
            addToCart={addToCartHandler}
            item={pItem}
            key={pItem.slug}
          ></ProductItem>
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
