import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
                <h4>Title: {product.title}</h4>
                <h5>Price: {product.price}</h5>
                <h5>Description: {product.description}</h5>
            </div>)}
        </fieldset>
    )
}

export default AllProducts