const ToDo = ({todo,updateComplete,updateFunction,removeFunction,updateFavorite}) => {
    <div className="todo">
        <input type={radio} onClick = {() => updateComplete(todo._id)}></input>
        <p>{todo.toDo}</p>
        <button onClick={() => updateFunction(todo._id)}>Update</button>
        <button onClick={() => removeFunction(todo._id)}>Update</button>
        <input type={radio} onClick = {() => updateFavorite(todo._id)}></input>
    </div>
}