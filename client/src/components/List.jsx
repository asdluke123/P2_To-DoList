const List = ({list,showListDetails,updateFunction,removeFunction,addToDo,newToDo}) => {
    return(
        <div className="list" onClick={() => showListDetails(list._id)}>
            <h3>{list.name}</h3>
            <button onClick={() => updateFunction(folder._id)}>Update name</button>
            <button onClick={() => removeFunction(folder._id)}>Remove Folder</button>
            <div>
                <input type={text} value = {newToDo.name} ></input>
            </div>
        </div>
    )
}