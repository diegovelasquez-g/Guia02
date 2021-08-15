import React from 'react'

const Todo = ({todo,cantidad,index,deleteTodo}) => {
    return(
        <>
            <div className="list">
            
               <h3>{cantidad}-{todo} <button className="btn-delete" onClick={() => deleteTodo(index)}>x</button></h3>
            </div>
            
        </>
    )
}


export default Todo