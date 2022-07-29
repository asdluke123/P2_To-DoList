import Update from "./Update"

const List = ({list,showListDetails,deleteList,updateList,index,isEdit,renderLists}) => {
    return(
        <div className="folder" >
        <div className="innerFolder" >
            {isEdit ? <div></div>:<h3 onClick={() => showListDetails(list)}>{list.name}</h3>}
            {isEdit ? <span> </span>:<button class ='delete' onClick={() => deleteList(list._id,index)}>x</button>}
        </div>
        {isEdit ? <Update render = {renderLists} list={list} isList={true}/> :<button class = 'update'onClick={() => updateList(true,index)}>Update</button>}
        </div>
    )
}

export default List