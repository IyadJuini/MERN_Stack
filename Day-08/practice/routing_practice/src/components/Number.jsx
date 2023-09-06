import React from 'react'
import { useParams } from 'react-router-dom'

const Number = () => {
    const {number} = useParams()
    return (
        <h2>
            {
                isNaN(number)
                ?<p>_👹_The word is : {number}</p>
                :<p>_🐱‍🚀_The number is : {number}</p>
            }
        </h2>
    )
}

export default Number