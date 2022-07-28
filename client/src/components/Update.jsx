import { DB_URL } from "../global"
import axios from "axios"
import { useState } from "react"
const Update = ({folder,todo,list,isToDo,isFolder,isList,render}) =>{
    const [newToDo,setNewToDo] = useState()
    const [newToDoNote,setNewToDoNote] = useState()
    const [newFolderName,setNewFolderName] = useState()
    const [newFolderType,setNewFolderType] = useState()
    const updateItem = async (id,item) =>{
        if(item === 'todo'){
            try{
                const res = await axios.put(`${DB_URL}/${item}/${id}`,{
                    toDo: newToDo,
                    note: newToDoNote,
                    isEdit: false
                })
                console.log(res)
                render()
            }catch(e){
                console.error(e)
            }
        }
        else if(item === 'folders'){
            console.log(id)
            try{
                const res = await axios.put(`${DB_URL}/${item}/${id}`,{
                    name: newFolderName,
                    folderType: newFolderType,
                    isEdit: false
                })
                console.log(res)
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
                <form onSubmit={() =>updateItem(list._id,'list')}>
                    <input type="text" placeholder="List Name"></input>
                </form>
            </div>
            :<div> </div>    
        }
        </div>
    )
}
export default Update