import React,{useState} from 'react'
import Display from './Display'


const Hooks = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <>
        <form>
        <p>First Name: <input type="text" name="firstName" id="" 
            onChange={(event)=> {setFirstName(event.target.value)}}
            value={firstName}/> </p>
        <p>Last Name: <input type="text" name="lastName" id="" 
            onChange={(event)=> {setLastName(event.target.value)}}
            value={lastName}/> </p>
        <p>Email: <input type="email" name="email" id="" 
            onChange={(event)=> {setEmail(event.target.value)}}
            value={email}/> </p>
        <p>Password: <input type="password" name="password" id="" 
            onChange={(event)=> {setPassword(event.target.value)}}
            value={password}/> </p>
        </form>
        <Display firstName = {firstName} lastName = {lastName} email = {email} password = {password} />
        </>
    )
}

export default Hooks