import React, {useState} from 'react';
import Todo from '../components/Todo';

const Form = () => {
    const [todo,setTodo] = useState()
    const [cantidad,setCantidad] = useState()
    const [todos,setTodos] = useState([
        {todo: 'Manzanas', cantidad: '1'},
        {todo: 'Peras', cantidad: '5'},
        {todo: 'Limones', cantidad: '2'}
    ])

    
    const handleChange = e => setTodo(e.target.value)
    const handleChange2 = e => setCantidad(e.target.value)
    
    const handleClick = e => {
        if(todo === '' || cantidad === ''){
            alert('el campo no puede estar vacio')
            return
        }
        
        setTodos([...todos,{todo,cantidad}])
        
    }
    

    const deleteTodo = indice =>{
        const newTodos = [...todos]
        newTodos.splice (indice,1)
        setTodos (newTodos)
    }
    return(
        <>
        <form onSubmit={e => e.preventDefault()}>
            <label>Agregar producto</label><br />
            <input type="text" name="todo" onChange={handleChange} />
            <input type="text" name="cantidad" onChange={handleChange2} />
            <button onClick={()=> {
                handleClick()
                
            }}>agregar</button>
        </form>
        {
            todos.map((value,index)=> (
                <Todo todo={value.todo} cantidad={value.cantidad} key={index} deleteTodo={deleteTodo} index={index} />
            ))
        }
      
        
        </>
    )
}
export default Form
