import { useEffect, useState } from 'react'
import axios from 'axios'
import { DB_URL } from '../global'
import Folder from '../components/Folder'
import { useNavigate } from 'react-router-dom'

const Folders = () =>{
    const [folders,setFolders] = useState([])
    const [makeFolder,setMakeFolder] = useState(false)
    const [folderName,setFolderName] = useState('')
    const [type,setType] = useState('')

    let navigate = useNavigate()
    
    const renderFolders = async () =>{
        try{
            const res = await axios.get(`${DB_URL}/folders`)
            setFolders(res.data.folders)
        }catch(e){
            console.error(e)
        }
    }
    useEffect(() =>{
        renderFolders()
    },[])

    const showFolderDetails = (id) =>{
        navigate(`/folders/${id}`)  
    }

    const nameHandler = (e) =>{
        setFolderName(e.target.value)
    }
    const typeHandler = (e) =>{
        setType(e.target.value)
    }
    const createFolder  = async () =>{
       try{ 
        const res = await axios.post(`${DB_URL}/folders`,{
            name:folderName,
            folderType: type,
            isEdit: false
        })
        let newFolders = [...folders,res.data.folder]
        setFolders(newFolders)
    }catch(e){
        console.error(e)
    }
    setMakeFolder(false)
    }
    const deleteFolder = async (id,index) =>{
        let newFolders = [...folders]
        try{
            const res = await axios.delete(`${DB_URL}/folders/${id}`)
            newFolders.splice(index,1)
            setFolders(newFolders)
        }catch(e){
            console.error(e)
        }
    }
    const renderEdit = (value,index) =>{
        let editFolder = folders[index]
        let newFolders = [...folders]
         editFolder.isEdit = value
        newFolders.splice(index,1,editFolder)
        setFolders(newFolders)
    }
return(
    <div id = "foldersContainer">
       {folders.map((folder,index) =>(
        <div id = 'folder'>
            <Folder renderFolders = {renderFolders} folder={folder} showFolderDetails={showFolderDetails} deleteFolder={deleteFolder} updateFolder={renderEdit} index={index} isEdit={folder.isEdit} />
        </div>
       ))}
    {makeFolder ? 
        <div id = "updateFolder"> 
            <input type="text"  placeholder='Folder Name' onChange={(e) => nameHandler(e)}></input>
            <input type="text"  placeholder='Folder Type' onChange={(e) => typeHandler(e)}></input>
            <button onClick={createFolder}>Submit</button>
        </div>
    : <button id='add' onClick={() => setMakeFolder(true)}>Add Folder</button>}
    </div>
)

}

export default Folders