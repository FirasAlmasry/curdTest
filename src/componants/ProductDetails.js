import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductDetails() {
    const api_url = 'https://fakestoreapi.com/products'
    const [product, setProducts] = useState({})

    useEffect(() => {
        fetch(`${api_url}/${params.productId}`)
            .then(res=>res.json())
            .then(product => setProducts(product))
    }, [])
    const params = useParams()
    return (
        <>
            <Product product={product} showButton={false} />
        </>
    );
}

export default ProductDetails;