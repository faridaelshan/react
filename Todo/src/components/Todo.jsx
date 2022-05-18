import React,{useState} from 'react'

const Todo = () => {
    const[todo,settodo]=useState([])
    const[value,setValue]=useState("")
  return (
    <div className='container mt-5'>
        <input value={value} onChange={(e)=>{
            setValue(e.target.value)
        }} type="text" />
        <button onClick={()=>{
            settodo(prev => [...prev, value])
            setValue('')
        }}>Submit</button>
        <ul>
            {todo.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Todo