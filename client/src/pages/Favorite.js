import { useEffect, useState } from 'react'
import axios from "axios"
import { DB_URL } from "../global"
import ToDo from '../components/ToDo'
const Favorite = () =>{
    const [favList,setFavList] = useState([])
    const renderFavList = async () =>{
        try{
            const res = await axios.get(`/favorite`)
            setFavList(res.data.toDos)
        }catch(e){
            console.error(e)
        }
    }
useEffect(() =>{
    renderFavList()
},[])
const updateComplete = async (e,id,index) =>{
    let res = null
    let updatedToDo = favList[index]
    let toDoArray = [...favList]
    if(e.target.checked === true){
        res = await axios.put(`/todo/${id}`,{
                complete : true
        })
        updatedToDo.complete = true
        toDoArray.splice(index,1,updatedToDo)
        setFavList(toDoArray)
    }
    else{
         res = await axios.put(`/todo/${id}`,{
            complete : false
        })
        updatedToDo.complete = false
        toDoArray.splice(index,1,updatedToDo)
        setFavList(toDoArray)
    }
}

const updateFavorite = async (e,id,index) =>{
    let toDoArray = [...favList]
    if(e.target.checked === true){
        try{
            const res = await axios.put(`/todo/${id}`,{
            favorite: false
        })
        }catch(e){
            console.error(e)
        }
    }
    toDoArray.splice(index,1)
    setFavList(toDoArray)

}
return(
<div>
    <h2>Favorites</h2>
    <div id = "favorite">
        {favList.map((todo,index) => (
            <ToDo todo={todo} updateComplete={updateComplete} index = {index} updateFavorite = {updateFavorite} inFavorite = {true}/>
        ))}
    </div>
</div>
)
}

export default Favorite