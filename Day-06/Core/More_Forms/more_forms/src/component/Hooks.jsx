import React,{useState} from 'react'
import Display from './Display'


const Hooks = (props) => {
    const [firstName, setFirstName] = useState("")
    const [firstNameError, setFirstNameError] = useState ("")
    const [lastName, setLastName] = useState("")
    const [lastNameError, setLastNameError] = useState ("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState ("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    const handleFirstName = (e) =>{
        setFirstName(e.target.value)
        if (e.target.value.length<2){
            setFirstNameError("FirstName too short")
        }
        else{
            setFirstNameError("")
        }
    }
    const handleLastName = (e) =>{
        setLastName(e.target.value)
        if (e.target.value.length<2){
            setLastNameError("LastName too short")
        }
        else{
            setLastNameError("")
        }
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
        if (e.target.value.length<5){
            setEmailError("Email too short")
        }
        else{
            setEmailError("")
        }
    }
        const handlePassword = (e) =>{
        setPassword(e.target.value)
        if (e.target.value.length<7){
            setPasswordError("Password too short")
        }
        else{
            setPasswordError("")
        }
    }
    const handleConfirmPassword = (e) =>{
        setConfirmPassword(e.target.value)
        if (e.target.value != password){
            setConfirmPasswordError("Password don't match")
        }
        else{
            setConfirmPasswordError("")
        }
    }
    return (
        <>
        <form>
        <p style={{color: "red" }} >{firstNameError}</p>
        <p>First Name: <input type="text" name="firstName" id="" 
            onChange={(event)=> {handleFirstName(event)}}
            value={firstName}/> </p>

        <p style={{color: "red" }} >{lastNameError}</p>
        <p>Last Name: <input type="text" name="lastName" id="" 
            onChange={(event)=> {handleLastName(event)}}
            value={lastName}/> </p>

        <p style={{color: "red" }} >{emailError}</p>
        <p>Email: <input type="email" name="email" id="" 
            onChange={(event)=> {handleEmail(event)}}
            value={email}/> </p>

        <p style={{color: "red" }} >{passwordError}</p>
        <p>Password: <input type="password" name="password" id="" 
            onChange={(event)=> {handlePassword(event)}}
            value={password}/> </p>

        <p style={{color: "red" }} >{confirmPasswordError}</p>
        <p>Confirm Password: <input type="password" name="confirmpassword" id="" 
            onChange={(event)=> {handleConfirmPassword(event)}}
            value={confirmPassword}/> </p>
        </form>
        <Display firstName = {firstName} lastName = {lastName} email = {email} password = {password} />
        </>
    )
}

export default Hooks