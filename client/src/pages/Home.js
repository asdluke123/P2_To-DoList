import { useEffect, useState } from 'react'
import axios from 'axios'
import { DB_URL } from '../global'
import ToDo  from '../components/ToDo'
const Home = () =>{
    const [todo,setTodo] = useState({})
    const [input,setInput] = useState()
    const [taskToDos,setTaskToDos] = useState([])
    const taskListId = "62e1e2126a3b1d602a60bda6"
    let complete = []
    useEffect(() =>{
        const renderTaskToDo = async () =>{
            try{
                const res = await axios.get(`${DB_URL}/list/${taskListId}`)
                setTaskToDos(res.data.todos)
            }catch(e){
                console.error(e)
            }
        }
        renderTaskToDo()
    },[todo])
    
    const createTaskToDo = async () =>{
        try{
            const res = await axios.post(`${DB_URL}/list/${taskListId}`,{
                toDo: todo,
                complete: false,
                list: "62e1e2126a3b1d602a60bda6",
                favorite: false
            })
            console.log(res)
        }catch(e){
            console.error(e)
        }
    }

    const changeHandler= (e) =>{
        setInput(e.target.value)
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
    return(
        <div>
            <div>
            <h2>Tasks</h2>
            </div>
            <div>
            {taskToDos.map((todo,index) => (
                <ToDo todo={todo} updateComplete={updateComplete} index = {index} deleteToDo = {deleteToDo}  />
            ))}
            </div>
            <div>
                <input type="text" onChange={(e) => changeHandler(e)} onKeyUp ={(e) => {
                    if(e.keyCode === 13){
                        setTodo(input)
                        createTaskToDo()
                    }
                }
                }></input>
            </div>
        </div>
    )
    
}
export default Home