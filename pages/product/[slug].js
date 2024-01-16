import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../../context/Cart";
import db from "../../utils/db";
import Product from "../../models/product";
function ProductPages({ product }) {
  const { state, dispatch } = useContext(CartContext);
  const router = useRouter();

  if (!product) {
    return <Layout>not found page 404</Layout>;
  }

  function addToCartHandler() {
    const exisitingItem = state.cart.cartItem.find(
      i => i.slug === product.slug
    );

    const qty = exisitingItem ? exisitingItem.qty + 1 : 1;

    if (product.count < qty) {
      alert("Product is out.");

      return;
    }

    dispatch({ type: "ADD_ITEMS", payload: { ...product, qty } });

    router.push("/cart");
  }
  return (
    <Layout title={product.title}>
      <div className="grid md:grid-cols-4 md:gap-3 bg-white rounded-xl p-10">
        <div className="md:col-span-2">
          <Image
            className="rounded-xl"
            src={product.image}
            width={340}
            height={340}
            layout="responsive"
          />
        </div>
        <div>
          <div className="text-lg">
            <h2>{product.title}</h2>
            <p>{product.cat}</p>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="p-5">
          <div className="mb-2 flex justify-between">
            <div>Price:</div>
            <div>{product.price}</div>
          </div>
          <div className="mb-2 flex justify-between">
            <div>Status:</div>
            <div>{product.count > 0 ? "availabe" : "Unavailabe"}</div>
          </div>
          <button
            className="rounded-xl bg-gray-700 text-white px-4 py-2 w-full"
            onClick={addToCartHandler}
          >
            add to cart
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default ProductPages;

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  await db.connect();

  const product = await Product.findOne({ slug }).lean();

  return {
    props: {
      product: product ? db.convertToObj(product) : null,
    },
  };
}
