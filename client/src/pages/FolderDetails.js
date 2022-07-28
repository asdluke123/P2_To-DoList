import { useEffect,useState } from "react"
import { useNavigate,useParams } from "react-router-dom"
import axios from 'axios'
import { DB_URL } from '../global'
import List from '../components/List'

const FolderDetails = () =>{
    const [lists,setLists] = useState([])
    const [makeList,setMakeList] = useState(false)
    const [listName,setListName] = useState()
    const {id} = useParams()
    const {name} = useParams()
    let navigate = useNavigate()


    const showListDetials = (list) =>{
        navigate(`/list/${list.name}/${list._id}`)
    }

    const renderLists = async () =>{
        try{
            const res = await axios.get(`/folders/${id}`)
            setLists(res.data.lists)
        }catch(e){
            console.error(e)
        }
    }
    useEffect(()=>{
        renderLists()
    },[])
    const createList = async () =>{
        try{
            const res = await axios.post(`/folders/${id}`,{
                name: listName,
                folder: id,
                isEdit: false
            })
            let newlist = [...lists,res.data.list]
            setLists(newlist)
        }catch(e){
            console.error(e)
        }
        setMakeList(false)
    }
    const renderEdit = (value,index) =>{
        let editList = lists[index]
        let newList = [...lists]
         editList.isEdit = value
        newList.splice(index,1,editList)
        setLists(newList)
    }
    const deleteList = async (id,index) =>{
        let newList = [...lists]
        try{
            const res = await axios.delete(`/list/${id}`)
            newList.splice(index,1)
            setLists(newList)
        }catch(e){
            console.error(e)
        }
    }
    return(
        <div class = 'folders'>
            <h2 className = 'Name'>{name}</h2>
        <div class = "foldersContainer">
            {lists.map((list,index) => (
                    <List list={list} showListDetails={showListDetials} deleteList={deleteList} updateList={renderEdit} index ={index} isEdit={list.isEdit} renderLists={renderLists} />
            ))}
            {makeList ? 
                <div class = "update folder"> 
                    <input type="text"  placeholder='List Name' onChange={(e) => setListName(e.target.value)}></input>
                    <button onClick={createList}>Submit</button>
                </div>
            : 
                <button id='add' onClick={() => setMakeList(true)}>Add List</button>}
        </div>
        </div>
    )

}

export default FolderDetails