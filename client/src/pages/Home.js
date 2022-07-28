import { useEffect, useState } from 'react'
import axios from 'axios'
import { DB_URL } from '../global'
import ToDo  from '../components/ToDo'
const Home = () =>{
    const [todo,setTodo] = useState()
    const [taskToDos,setTaskToDos] = useState([])   
    const taskListId = "62e1e2126a3b1d602a60bda6"
    
    const renderTaskToDo = async () =>{
        try{
            const res = await axios.get(`${DB_URL}/list/${taskListId}`)
            setTaskToDos(res.data.todos)
        }catch(e){
            console.error(e)
        }
    }
    useEffect(() =>{
        renderTaskToDo()
    },[todo])
    
    const createTaskToDo = async () =>{
        try{
            const res = await axios.post(`${DB_URL}/list/${taskListId}`,{
                toDo: todo,
                complete: false,
                list: "62e1e2126a3b1d602a60bda6",
                favorite: false,
                isEdit: false
            })
            setTaskToDos([...taskToDos,res.data.toDo])
        }catch(e){
            console.error(e)
        }
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
        let updatedToDo = taskToDos[index]
        let toDoArray = [...taskToDos]
        if(e.target.checked === true){
            res = await axios.put(`${DB_URL}/todo/${id}`,{
                    complete : true
            })
            updatedToDo.complete = true
            toDoArray.splice(index,1,updatedToDo)
            setTaskToDos(toDoArray)
        }
        else{
             res = await axios.put(`${DB_URL}/todo/${id}`,{
                complete : false
            })
            updatedToDo.complete = false
            toDoArray.splice(index,1,updatedToDo)
            setTaskToDos(toDoArray)
        }
    }
    const deleteToDo = async (id,index) =>{
        let toDoArray = [...taskToDos]
        try{
            const res = await axios.delete(`${DB_URL}/todo/${id}`)
            toDoArray.splice(index,1)
            setTaskToDos(toDoArray)
        }catch(e){
            console.error(e)
        }
    }
    const renderEdit = (value,index) =>{
        let editToDo = taskToDos[index]
        let taskArray = [...taskToDos]
         editToDo.isEdit = value
        taskArray.splice(index,1,editToDo)
        setTaskToDos(taskArray)
        
    }
    return(
        <div class = 'ToDoContainer'>
            <div>
            <h2>Tasks</h2>
            </div>
            <div class = "toDos">
            {taskToDos.map((todo,index) => (
                <ToDo renderList = {renderTaskToDo} todo={todo} updateComplete={updateComplete} index = {index} deleteToDo = {deleteToDo} updateToDo = {renderEdit} isEdit = {todo.isEdit} updateFavorite = {updateFavorite} inFavorite = {false}/>
            ))}
            </div>
            <div class = "addToDos">
                 <input type="text"  placeholder = 'Add new To-DO'onChange={(e) => changeHandler(e)} onKeyUp ={(e) => {
                    if(e.keyCode === 13){
                        createTaskToDo()
                    }}}></input>
            </div>
        </div>
    )
    
}
export default Home