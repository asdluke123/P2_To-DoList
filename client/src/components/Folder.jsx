const Folder = ({folder,showFolderDetails,removeFunction,updateFunction}) => {
    return(
        <div className="folder" onClick={() => showFolderDetails(folder._id)}>
            <h3>{folder.name}</h3>
            <button onClick={() => updateFunction(folder._id)}>Update name</button>
            <button onClick={() => removeFunction(folder._id)}>Remove Folder</button>
        </div>
    )
}
export default Folder