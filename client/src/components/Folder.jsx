import Update from "./Update"
const Folder = ({folder,showFolderDetails,deleteFolder,updateFolder,index,isEdit,renderFolders}) => {
    return(
        <div className="folder" >
            <div className="innerFolder">
            {isEdit ? <div></div>:<h3 onClick={() => showFolderDetails(folder._id,folder.name)}>{folder.name}</h3>}
            {isEdit ? <span> </span>:<button class = 'delete' onClick={() => deleteFolder(folder._id,index)}>x</button>}
            </div>
            {isEdit ? <span></span>:<p className = 'details'>Type: {folder.folderType}</p>}
            {isEdit ? <Update render = {renderFolders} folder={folder} isFolder={true}/> :<button class ='update' onClick={() => updateFolder(true,index)}>Update</button>}
        </div>
        
    )
}
export default Folder