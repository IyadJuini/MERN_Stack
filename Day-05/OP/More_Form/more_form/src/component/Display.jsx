import React from 'react'

const Display = (props) => {
    return (
        <fieldset>
            <legend><h1>👹👹👹👹Display👹👹👹👹</h1></legend>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Email: {props.email}</p>
            <p>Password: {props.password}</p>
        </fieldset>

    )
}

export default Display