const List = ({list,showListDetails,updateFunction,removeFunction}) => {
    return(
        <div className="list" onClick={() => showListDetails(list._id)}>
            <h3>{list.name}</h3>
            <button onClick={() => updateFunction(folder._id)}>Update name</button>
            <button onClick={() => removeFunction(folder._id)}>Remove Folder</button>
        </div>
    )
}