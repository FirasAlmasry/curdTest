import { useState, useEffect } from 'react'
import Product from './Product';
function ProductList() {
    const api_url = 'https://fakestoreapi.com/products'
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    const getProduct = () => {
        fetch(api_url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }
    const getCategory = () => {
        fetch(`${api_url}/categories`)
            .then(response => response.json())
            .then(cate => setCategories(cate))
    }
    const getProductInCategory = (catName) => {
        fetch(`${api_url}/category/${catName}`)
            .then(res => res.json())
            .then(json => setProducts(json))
    }

    useEffect(() => {
        getProduct()
        getCategory()
    }, [])



    return (
        <>
            <h2 className="text-center">Our Product</h2>
            <div className="container">
            <button
                     onClick={ () => 
                            {getProduct()}
                            } className='btn btn-info'>All
                    </button>
                {
                    categories.map((cat) => {
                        return <button kay={cat} onClick={() => { getProductInCategory(cat) }} className='btn btn-info'>{cat}</button>
                    })
                    
                }
                <div className="row">
                    {
                        products.map((product) => {
                            return (
                                <div kay={product.id} className='col-3'>
                                    <Product product={product} showButton={true} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default ProductList;