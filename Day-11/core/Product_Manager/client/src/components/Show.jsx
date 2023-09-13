import React, { useState } from 'react'
import { useParams} from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
const Show = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    return (
    <div>
        <h1>Product Details</h1><br/>
        <p>Title: {product.title}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        </div>
    )
}

export default Show