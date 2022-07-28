import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { DB_URL } from '../global'
import ToDo  from '../components/ToDo'
const ListDetails = () =>{
    const [todo,setTodo] = useState()
    const [listToDos,setListToDos] = useState([])   
    const{name} = useParams()
    const {id} = useParams()
    
    const renderListToDos = async () =>{
        try{
            const res = await axios.get(`${DB_URL}/list/${id}`)
            setListToDos(res.data.todos)
        }catch(e){
            console.error(e)
        }
    }
    
    useEffect(() =>{
        renderListToDos()
    },[todo])
    
    const createToDo = async () =>{
        try{
            const res = await axios.post(`${DB_URL}/list/${id}`,{
                toDo: todo,
                complete: false,
                list: id,
                favorite: false,
                isEdit: false
            })
            setListToDos([...listToDos,res.data.toDo])
        }catch(e){
            console.error(e)
        }
        setTodo('')
    }
    const updateFavorite = async (e,id) =>{
        if(e.target.checked === true){
            try{
                const res = await axios.put(`${DB_URL}/todo/${id}`,{
                favorite: true
            })
            console.log(res)
            }catch(e){
                console.error(e)
            }
        }else{
            try{
                const res = await axios.put(`${DB_URL}/todo/${id}`,{
                favorite: false
            })
            console.log(res)
            }catch(e){
                console.error(e)
            }
        }

    }
    const changeHandler= (e) =>{
        setTodo(e.target.value)
    }

    const updateComplete = async (e,id,index) =>{
        let res = null
        let updatedToDo = listToDos[index]
        let toDoArray = [...listToDos]
        if(e.target.checked === true){
            res = await axios.put(`${DB_URL}/todo/${id}`,{
                    complete : true
            })
            updatedToDo.complete = true
            toDoArray.splice(index,1,updatedToDo)
            setListToDos(toDoArray)
        }
        else{
             res = await axios.put(`${DB_URL}/todo/${id}`,{
                complete : false
            })
            updatedToDo.complete = false
            toDoArray.splice(index,1,updatedToDo)
            setListToDos(toDoArray)
        }
    }
    const deleteToDo = async (id,index) =>{
        let toDoArray = [...listToDos]
        try{
            const res = await axios.delete(`${DB_URL}/todo/${id}`)
            toDoArray.splice(index,1)
            setListToDos(toDoArray)
        }catch(e){
            console.error(e)
        }
    }
    const renderEdit = (value,index) =>{
        let editToDo = listToDos[index]
        let taskArray = [...listToDos]
         editToDo.isEdit = value
        taskArray.splice(index,1,editToDo)
        setListToDos(taskArray)
    }
    return(
        <div class = "ToDoContainer">
            <div>
            <h2 className = 'Name'>{name}</h2>
            </div>
            <div class = "toDos">
            {listToDos.map((todo,index) => (
                <ToDo renderList = {renderListToDos} todo={todo} updateComplete={updateComplete} index = {index} deleteToDo = {deleteToDo} updateToDo = {renderEdit} isEdit = {todo.isEdit} updateFavorite = {updateFavorite} inFavorite = {false}/>
            ))}
            </div>
            <div class = "addToDos">
                 <input type="text"  placeholder = 'Add new To-DO' value = {todo} onChange={(e) => changeHandler(e)} onKeyUp ={(e) => {
                    if(e.keyCode === 13){
                        createToDo()
                    }}}></input>
            </div>
        </div>
    )
    
}
export default ListDetails