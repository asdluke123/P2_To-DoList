import { DB_URL } from "../global"
import axios from "axios"
import { useState } from "react"
const Update = ({folder,todo,list,isToDo,isFolder,isList,render}) =>{
    const [newToDo,setNewToDo] = useState()
    const [newToDoNote,setNewToDoNote] = useState()
    const [newFolderName,setNewFolderName] = useState()
    const [newFolderType,setNewFolderType] = useState()
    const [newListName,setNewListName] = useState()
    const updateItem = async (id,item) =>{
        if(item === 'todo'){
            try{
                const res = await axios.put(`${DB_URL}/${item}/${id}`,{
                    toDo: newToDo,
                    note: newToDoNote,
                    isEdit: false
                })
                render()
            }catch(e){
                console.error(e)
            }
        }
        else if(item === 'folders'){
            try{
                const res = await axios.put(`${DB_URL}/${item}/${id}`,{
                    name: newFolderName,
                    folderType: newFolderType,
                    isEdit: false
                })
                render()
            }catch(e){
                console.error(e)
            }
        }else if(item === 'list'){
            try{
                const res = await axios.put(`${DB_URL}/${item}/${id}`,{
                    name: newListName,
                    isEdit: false
                })
                render()
            }catch(e){
                console.error(e)
            }
    }
}
    return (
        <div>
            {isFolder ? 
            <div>
        
                    <input type="text" placeholder="Folder Name" onChange= {(e) => setNewFolderName(e.target.value)}></input>
                    <input type="text" placeholder="Folder Type" onChange= {(e) => setNewFolderType(e.target.value)}></input>
                    <button onClick={()=>updateItem(folder._id,'folders')}>Save Edit</button>
            </div>
            :<div> </div>    
        }
                 {isToDo ? 
            <div>
                    <input type="text" placeholder="New ToDo" onChange= {(e) => setNewToDo(e.target.value)}></input>
                    <input type="text" placeholder="Add Note" onChange={(e) => setNewToDoNote(e.target.value)}></input>
                    <button onClick={()=>updateItem(todo._id,'todo')}>Save Edit</button>
            </div>
            :<div> </div>    
        }
                 {isList ? 
            <div>
                
                    <input type="text" placeholder="List Name" onChange={(e) => setNewListName(e.target.value)}></input>
                    <button onClick={()=>updateItem(list._id,'list')}>Save Edit</button>
            </div>
            :<div> </div>    
        }
        </div>
    )
}
export default Update