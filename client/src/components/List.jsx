import Update from "./Update"

const List = ({list,showListDetails,deleteList,updateList,index,isEdit,renderLists}) => {
    return(
        <div className="list" >
            {isEdit ? <div></div>:<h3 onClick={() => showListDetails(list)}>{list.name}</h3>}
            {isEdit ? <Update render = {renderLists} list={list} isList={true}/> :<button onClick={() => updateList(true,index)}>Update</button>}
            {isEdit ? <span> </span>:<button onClick={() => deleteList(list._id)}>X</button>}
        </div>
    )
}

export default List