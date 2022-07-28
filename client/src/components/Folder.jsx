import Update from "./Update"
const Folder = ({folder,showFolderDetails,deleteFolder,updateFolder,index,isEdit}) => {
    return(
        <div className="folder" >
            {isEdit ? <div></div>:<h3 onClick={() => showFolderDetails(folder._id)}>{folder.name}</h3>}
            {isEdit ? <Update folder={folder} isFolder={true}/> :<button onClick={() => updateFolder(true,index)}>Update</button>}
            {isEdit ? <button onClick={() => updateFolder(false,index)}>Save Edit</button> :<button onClick={() => deleteFolder(folder._id)}>X</button>}

        </div>
    )
}
export default Folder