import Update from "./Update"
const ToDo = ({todo,updateComplete,updateToDo,deleteToDo,updateFavorite,index,isEdit}) => {

return(
    <div className="todo">
        {isEdit ? <span> </span>:<input type="checkbox"  onClick = {(e) => updateComplete(e,todo._id,index)}></input>}
        {isEdit ? <span></span>: (todo.complete ? <del><p>{todo.toDo}</p></del> : <p>{todo.toDo}</p>)}
        {isEdit ? <Update todo={todo} isToDo={true}/> :<button onClick={() => updateToDo(true)}>Update</button>}
        {isEdit ? <button onClick={() => updateToDo(false)}>Save Edit</button> :<button onClick={() => deleteToDo(todo._id)}>X</button>}
        {isEdit ? <div> </div> :<input type="checkbox" onClick = {(e) => updateFavorite(e,todo._id)}></input>}
    </div>
)
}
export default ToDo