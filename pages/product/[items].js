import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import ProductItems from "../../data/Products.json"
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../../context/Cart";
function ProductPages(){
    const {state , dispatch} = useContext(CartContext)
    const router = useRouter();
    const {query} = useRouter();
    const {items} = query;

    const products = ProductItems.find((i)=> i.slug === items);

    if(!products){
      return (<Layout>not found pafe 404</Layout>)
    }

    function addToCartHandler(){
      const exisitingItem = state.cart.cartItem.find((i)=> i.slug === products.slug);

      const qty = exisitingItem ? exisitingItem.qty + 1 : 1;

      dispatch({type: "ADD_ITEMS" , payload: {...products , qty} });

      if (products.count < qty) {
        alert('Product is out.')
  
        return
      }

      router.push('/cart');
    }
    return (
        <Layout title={products.title}><div className="grid md:grid-cols-4 md:gap-3 bg-white rounded-xl p-10">
            <div className="md:col-span-2">
                <Image className="rounded-xl" src={products.image} width={340} height={340} layout="responsive"/>
            </div>
            <div>
                <div className="text-lg">
                    <h2>{products.title}</h2>
                    <p>{products.cat}</p>
                    <p>{products.description}</p>
                </div>
            </div>
            <div className="p-5">
              <div className="mb-2 flex justify-between">
                <div>Price:</div>
                <div>{products.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status:</div>
                <div>{products.count > 0 ? "availabe" : "Unavailabe"}</div>
                
              </div>
              <button className="rounded-xl bg-gray-700 text-white px-4 py-2 w-full" onClick={addToCartHandler}>
                    add to cart
                </button>
            </div>
            </div>
        </Layout>
    )
}

export default ProductPages