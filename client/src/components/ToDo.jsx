import Update from "./Update"
const ToDo = ({todo,updateComplete,updateToDo,deleteToDo,updateFavorite,index,isEdit,inFavorite,renderList}) => {

return(
    <div className="todo">
        {isEdit ? <span> </span>:<input type="checkbox"  onClick = {(e) => updateComplete(e,todo._id,index)}></input>}
        {isEdit ? <span></span>: (todo.complete ? <del><p>{todo.toDo}</p></del> : <p>{todo.toDo}</p>)}
        {inFavorite?<span></span>:isEdit ? <Update todo={todo} isToDo={true} render = {renderList}/> :<button onClick={() => updateToDo(true,index)}>Update</button>}
        {inFavorite?<span></span>:isEdit ? <span></span>:<button onClick={() => deleteToDo(todo._id)}>X</button>}
        {isEdit ? <div> </div> :<input type="checkbox" onClick = {(e) => updateFavorite(e,todo._id,index)}></input>}
    </div>
)
}
export default ToDo