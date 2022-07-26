const List = ({list,showListDetails,updateFunction,removeFunction}) => {
    return(
        <div className="list" onClick={() => showListDetails(list._id)}>
            <h3>{list.name}</h3>
            <button onClick={() => updateFunction(list._id)}>Update name</button>
            <button onClick={() => removeFunction(list._id)}>Remove Folder</button>
        </div>
    )
}

export default List