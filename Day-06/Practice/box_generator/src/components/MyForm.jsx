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

        <div>box_generator</div>
        <label htmlFor="">Color</label>
        <input type="text" name="color" id="#" onChange={(e)=>setColor(e.target.value)} value={color}/>
        <button>Add</button>
    </form>
    </>
)}

export default MyForm