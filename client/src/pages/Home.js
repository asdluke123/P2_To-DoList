import { useEffect, useState } from 'react'
import axios from 'axios'
import { DB_URL } from '../global'
import ToDo  from '../components/ToDo'
const Home = () =>{
    const [todo,setTodo] = useState({})
    const [taskList,setTaskList] = useState({})
    const [input,setInput] = useState()
    const [taskToDos,setTaskToDos] = useState([])
    
    useEffect(() =>{
        const renderTaskList = async () =>{
            try{
                const res = await axios.get(`${DB_URL}/`)
                setTaskList(res.data.lists[0])
            }catch(e){
                console.error(e)
            }
        }
        renderTaskList()
    },[])

    const createTaskToDo = async () =>{
        try{
            const res = await axios.post(`${DB_URL}/list/${taskList._id}`,{
                toDo: todo,
                complete: false,
                list: taskList._id,
                favorite: false
            })
            console.log(res)
        }catch(e){
            console.error(e)
        }
    }

    const renderTaskToDo = async () =>{
        try{
            const res = await axios.get(`${DB_URL}/list/${taskList._id}`)
            setTaskToDos(res.data.todos)
        }catch(e){
            console.error(e)
        }
    
    }
    const changeHandler= (e) =>{
        setInput(e.target.value)
    }

    const updateComplete = async (id,e) =>{
        console.log(e.target.value)
    }
    
    return(
        <div>
            <div>
            <h2>{taskList.name}</h2>
            </div>
            <div>
            {taskToDos.map((todo) => (
                <ToDo todo={todo} updateComplete={updateComplete} />
            ))}
            </div>
            <div>
                <input type="text" onChange={(e) => changeHandler(e)} onKeyUp ={(e) => {
                    if(e.keyCode === 13){
                        setTodo(input)
                        createTaskToDo()
                        renderTaskToDo()
                    }
                }
                }></input>
            </div>
        </div>
    )
    
}
export default Home