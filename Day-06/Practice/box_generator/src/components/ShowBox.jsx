import React from 'react'
import './Box.css'

const ShowBox = (props) => {
    return (
        <div className="box-container">
            {props.colors.map((c, idx) => {
                return (
                    <div className='box' key={idx} style={{ backgroundColor: c }}></div>
                )
            }

            )}
            {/* <div className='box' style={{ backgroundColor: "red" }}></div> */}

        </div>
    )
}

export default ShowBox