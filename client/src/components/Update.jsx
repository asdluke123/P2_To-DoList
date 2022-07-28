import { DB_URL } from "../global"
import axios from "axios"
const Update = ({folder,todo,list,isToDo,isFolder,isList}) =>{
    const updateItem = async (id,item,newItem) =>{
        try{
            const res = await axios.put(`${DB_URL}/${item}/${id}`,{
                toDo: newItem
            })
            console.log(res)
        }catch(e){
            console.error(e)
        }
    }
    return (
        <div>
            {isFolder ? 
            <div>
                <form onSubmit={() =>updateItem(folder._id,'folders')}>
                    <input type="text" placeholder="Folder Name"></input>
                </form>
            </div>
            :<div> </div>    
        }
                 {isToDo ? 
            <div>
                    <input type="text" placeholder="New ToDo" onKeyUp={(e) => {
                        if(e.keyCode === 13){
                            updateItem(todo._id,'todo',e.target.value)
                        }
                    }}></input>

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