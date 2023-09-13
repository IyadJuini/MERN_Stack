import React, {useState} from 'react'

const MyForm = (props) => {
    const [color,setColor] = useState("")

    const handleForm = (e)=>
    {
        e.preventDefault()
        props.AddColor(color)
    }
    return (
    <>
    <form onSubmit={handleForm}>

        <div><h2 style={{margin: 20 }} >_👾🐱‍🚀👽box_generator_👽🐱‍🚀👾</h2></div>
        <label style={{margin: 20 }}> Color </label>
        <input type="color" name="color" id="#" onChange={(e)=>setColor(e.target.value)} value={color}/>
        <button style={{margin: 20 }} >Add</button>
    </form>
    </>
)}

export default MyForm