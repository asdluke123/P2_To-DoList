import { useEffect, useState } from 'react'
import axios from 'axios'
import { DB_URL } from '../global'
import Folder from '../components/Folder'
import { navigate } from 'react-router-dom'
import AddFolder from '../components/Update'
import { createFolder } from '../../../controllers'
const Folders = () =>{
    const [folders,SetFolders] = useState([])
    const [makeFolder,setMakeFolder] = useState(false)
    useEffect(() =>{
        const renderFolders = async () =>{
            try{
                const res = await axios.get(`${DB_URL}/folders`)
                console.log(res)
            }catch(e){
                console.error(e)
            }
        }
        renderFolders()
    },[])

    const addFolder  = () =>{

    }
return(
    <div>
        
    {makeFolder? 
        <div> 
        <form onSubmit={createFolder()}>
            <input type="text"  placeholder='Folder Name'onChange={(e) => nameHandler(e)}></input>
            <input type="text"  placeholder='Folder Type'onChange={(e) => typeHandler(e)}></input>
            <button type='submit'>Submit</button>
        </form>
        </div>
    :<button id = 'add'onClick = {addFolder()}>Add Folder</button>}
    </div>
)

}

export default Folders