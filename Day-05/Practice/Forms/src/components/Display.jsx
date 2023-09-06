import React from 'react'

const Display = (props) => {

    return (
        <>
        <div>Display</div>
        <p>Username: {props.username}</p>
        <p>Age: {props.age}</p>
        <p>favfood: {props.favfood}</p>
        </>
    )
    }

export default Display