const ToDo = ({todo,updateComplete,updateFunction,removeFunction,updateFavorite}) => {
return(
    <div className="todo">
        <input type="radio" onClick = {(e) => updateComplete(todo._id,e)}></input>
        <p>{todo.toDo}</p>
        <button onClick={() => updateFunction(todo._id)}>Update</button>
        <button onClick={() => removeFunction(todo._id)}>X</button>
        <input type="radio" onClick = {() => updateFavorite(todo._id)}></input>
        
    </div>
)
}
export default ToDo