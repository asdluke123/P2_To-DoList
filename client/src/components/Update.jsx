const Update = ({folder,todo,list,updateToDo,updateFolder,updateList}) =>{
    return (
        <div>
            {folder ? 
            <div>
                <form onSubmit={updateFolder}>
                    <input type="text" placeholder="Folder Name"></input>
                    <input type="text" placeholder="Folder Type"></input>
                </form>
            </div>
            :<div> </div>    
        }
                 {todo ? 
            <div>
                <form onSubmit={updateToDo}>
                    <input type="text" placeholder="New ToDo"></input>
                </form>
            </div>
            :<div> </div>    
        }
                 {list ? 
            <div>
                <form onSubmit={updateList}>
                    <input type="text" placeholder="List Name"></input>
                </form>
            </div>
            :<div> </div>    
        }
        </div>
    )


}
export default Update