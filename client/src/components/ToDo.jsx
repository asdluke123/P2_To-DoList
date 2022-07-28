import Update from "./Update"
const ToDo = ({todo,updateComplete,updateToDo,deleteToDo,updateFavorite,index,isEdit,inFavorite,renderList}) => {

return(
    <div className="todo">
        <div className="innerToDo">
        {isEdit ? <span> </span>:<input type="checkbox"  class ='updateComplete' onClick = {(e) => updateComplete(e,todo._id,index)}></input>}
        {isEdit ? <span></span>: todo.complete ? <del><p>{todo.toDo}</p></del> : <p>{todo.toDo}</p>}
        {isEdit ? <span></span>: inFavorite ? <span></span>:<button className ='delete' onClick={() => deleteToDo(todo._id,index)}>x</button>}
        {isEdit ? <div> </div> : inFavorite ? <button className = 'favButton' onClick = {(e) => updateFavorite(e,todo._id,index)}>Unfavorite</button> :todo.favorite ? <input className="favButton" type="checkbox" onClick = {(e) => updateFavorite(e,todo._id,index)} checked></input>:<input className="favButton" type="checkbox" onClick = {(e) => updateFavorite(e,todo._id,index)}></input>}
        </div>
        <div>{isEdit ? <span></span>:<p className = 'note'>{todo.note}</p>}</div>
        <div>{isEdit ?<Update todo={todo} isToDo={true} render = {renderList}/> : inFavorite ? <span></span>:<button class = 'update'onClick={() => updateToDo(true,index)}>Update</button>} </div>
    </div>
)
}
export default ToDo