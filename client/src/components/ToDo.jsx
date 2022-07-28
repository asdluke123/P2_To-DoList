import Update from "./Update"
const ToDo = ({todo,updateComplete,updateToDo,deleteToDo,updateFavorite,index,isEdit,inFavorite}) => {

return(
    <div className="todo">
        {isEdit ? <span> </span>:<input type="checkbox"  onClick = {(e) => updateComplete(e,todo._id,index)}></input>}
        {isEdit ? <span></span>: (todo.complete ? <del><p>{todo.toDo}</p></del> : <p>{todo.toDo}</p>)}
        {inFavorite?<span></span>:isEdit ? <Update todo={todo} isToDo={true}/> :<button onClick={() => updateToDo(true)}>Update</button>}
        {inFavorite?<span></span>:isEdit ? <button onClick={() => updateToDo(false)}>Save Edit</button> :<button onClick={() => deleteToDo(todo._id)}>X</button>}
        {isEdit ? <div> </div> :<input type="checkbox" onClick = {(e) => updateFavorite(e,todo._id)}></input>}
    </div>
)
}
export default ToDo