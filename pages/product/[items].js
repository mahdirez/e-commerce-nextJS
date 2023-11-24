import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import ProductItems from "../../data/Products.json"
function ProductPages(){
    const {query} = useRouter();
    const {items} = query;

    const products = ProductItems.find((i)=> i.slug === items);

    if(!products){
      return (<Layout>not found pafe 404</Layout>)
    }
    return (
        <Layout title={products.title}>{products.slug}</Layout>
    )
}

export default ProductPages