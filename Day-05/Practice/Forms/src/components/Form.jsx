import React,{useState} from 'react'
import Display from './Display'

const Form = (props) => {
    const [username, setUsername] = useState("")
    const [age, setAge] = useState("")
    const [favfood, setFavfood] = useState("")

const formHandler = (event) => {
}
    return (
        
            <fieldset>
                <legend><h1>👽👽👽👽Forms👽👽👽👽 </h1></legend>
                <form onSubmit={ formHandler }>
                    <p>Username: <input type="text" name="username" id="" 
                    onChange={(event)=> {setUsername(event.target.value)}}
                    value={username}/> </p>

                    <p>age: <input type="number" name="age" id="" 
                    onChange={(event)=> {setAge(event.target.value)}}
                    value={age}/> </p>

                    <p>favfood: <input type="text" name="favfood" id="" 
                    onChange={(event)=> {setFavfood(event.target.value)}}
                    value={favfood}/> </p>
                </form>
                <Display username={username} age={age} favfood={favfood} />
                
            </fieldset>
    )
}

export default Form