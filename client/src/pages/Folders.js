import { useEffect, useState } from 'react'
import axios from 'axios'
import { DB_URL } from '../global'
import Folder from '../components/Folder'
import { navigate } from 'react-router-dom'
import AddFolder from '../components/Update'
const Folders = () =>{
    const [folders,SetFolders] = useState([])
  
    


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
    <button id = 'add'onClick = {addFolder()}>Add Folder</button>
    
    </div>
)

}

export default Folders