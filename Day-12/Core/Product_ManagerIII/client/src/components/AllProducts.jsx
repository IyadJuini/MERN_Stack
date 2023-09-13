import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const AllProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(serverResponse => {
                console.log(serverResponse.data, "👹👹👹")
                setProducts(serverResponse.data)
            })
            .catch(serverError => console.log(serverError, "🐱‍🚀🐱‍🚀🐱‍🚀"))
    },[])
    return (
        <fieldset>
            <legend>👽👽👽_AllProducts_👽👽👽</legend>
            {products.map(product => <div key={product._id} 
            style={{backgroundColor:product.isFunny ? "cornflowerblue": "aqua"}} >
                <Link to = {`/${product._id}`}> {product.title}</Link>
            </div>
            )}
        </fieldset>
    )
}

export default AllProducts