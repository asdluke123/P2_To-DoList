import Update from "./Update"
const Folder = ({folder,showFolderDetails,deleteFolder,updateFolder,index,isEdit,renderFolders}) => {
    return(
        <div className="folder" >
            {isEdit ? <div></div>:<h3 onClick={() => showFolderDetails(folder._id)}>{folder.name}</h3>}
            {isEdit ? <Update render = {renderFolders} folder={folder} isFolder={true}/> :<button onClick={() => updateFolder(true,index)}>Update</button>}
            {isEdit ? <span> </span>:<button onClick={() => deleteFolder(folder._id)}>X</button>}
        </div>
    )
}
export default Folder