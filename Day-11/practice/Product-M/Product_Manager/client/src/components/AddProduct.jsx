import React ,{useState} from 'react'
import axios from 'axios'

const AddProduct = (props) => {
    const [product, setProduct] = useState({title:"", price:0, description:""})
    const formHandler = (e) => {
        e.preventDefault()
        console.log("SUBMITTED PERSON : ", product);
        axios.post("http://localhost:8000/api/products", product)
            .then(serverResponse => console.log(serverResponse))
            .catch(serverError => console.log(serverError))
        setProduct({ title: "", price: 0, description:""})
    }
    return (
        <fieldset>
            <legend>👾👾👾AddProduct👾👾👾</legend>
            {/* <h4>
                PERSON FROM STATE {JSON.stringify(product)}
            </h4> */}
            <form onSubmit={formHandler}>

                <p>
                Title: <input type="text" 
                onChange={(e) => setProduct({...product, title: e.target.value})}
                value={product.title}/>
                </p>
                
                <p>Price : <input type="number"
                onChange={(e) => setProduct({ ...product, price: e.target.value })}
                value={product.price}
                /></p>

                <p>Description : <input type="text-area"
                    onChange={(e) => setProduct({ ...product, description: e.target.value })}
                    value={product.description}
                /></p>

                <button>Submit</button>
            </form>
        </fieldset>
    )
}

export default AddProduct