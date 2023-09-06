import React from 'react'
import { useParams } from 'react-router-dom'

const Word = () => { 
    const {number} = useParams()
    return (
        <div>
        <h1>The number is :</h1>
        </div>
    )
}

export default Word