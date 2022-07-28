const ToDo = ({todo,updateComplete,updateFunction,deleteToDo,updateFavorite,index}) => {
return(
    <div className="todo">
        <input type="checkbox"  onClick = {(e) => updateComplete(e,todo._id,index)}></input>
        {todo.complete ? <del><p>{todo.toDo}</p></del> : <p>{todo.toDo}</p>}
        <button onClick={() => updateFunction(todo._id,index)}>Update</button>
        <button onClick={() => deleteToDo(todo._id)}>X</button>
        <input type="checkbox" onClick = {() => updateFavorite(todo._id)}></input>
    </div>
)
}
export default ToDo