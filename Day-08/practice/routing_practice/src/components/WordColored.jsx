import React from 'react'
import { useParams } from 'react-router-dom'

const WordColored = () => {
    const {number,col1,col2} = useParams()
    return (
        <div>
            <h2 style={{color:col1, backgroundColor:col2}}>
                _👾👾_The word is : {number}
            </h2>
        </div>
    )
}

export default WordColored