import React from 'react'

const PersonCard = (props) => {
    return (
        <div className='App'>
            <fieldset>
                <legend>🔥🔥🔥🔥🔥personCrd🔥🔥🔥🔥🔥</legend>
                <>
                    <h1>{props.firstName} {props.lastName}</h1>
                    <p>Age: {props.age}</p>
                    <p>Hair color: {props.hairColor}</p>
                    
                </>
            </fieldset>
        </div>
    )
}

export default PersonCard