import React, {useState} from 'react'

const Form = ({todoList, setTodoList}) => {
    const[todo, setTodo] = useState({content:"" ,isCompleted: false})
    const createTodo = (e)=>{
        e.preventDefault()
        setTodoList([...todoList, todo])
        setTodo({content:"", isCompleted:false})
    }
    return (
        <div>
            <input 
            onChange={(e)=>{
                console.log(todo);
                setTodo({...todo, content: e.target.value})
            }}
            value={todo.content}
            />
            <br />
            <button onClick={(e)=>createTodo(e)} style={{backgroundColor:"gray", color:"white"}}>Add</button>
        </div>
    )
}

export default Form