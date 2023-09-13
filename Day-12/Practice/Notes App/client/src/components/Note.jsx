import React from 'react'
import noteStyle from './Note.module.css'

const Note = (props) => {
    return (
        <div className={noteStyle.Note} > 
            <div>👽👽👽__Note Title__👽👽👽</div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium minus officia iusto nesciunt provident eos ducimus commodi.
                Asperiores cupiditate itaque officia fugiat natus porro voluptates ducimus eaque distinctio, beatae ipsam!
            </p>
        <div className='d-flex justify-content-between'>
            <p>
                2021-11-09
            </p>
            <div className='btn btn-success'>
            <button>Edit</button>
            <button>Delete</button>
            </div>
        </div>
        </div>
    )
}

export default Note