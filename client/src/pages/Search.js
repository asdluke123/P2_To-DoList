import axios from 'axios'
import {useState } from 'react'
import { DB_URL } from '../global'
import {useNavigate} from 'react'
const Search = () =>{
const [userSearch,setUserSearch] = useState()
const [searchToDo,setSearchToDo] = useState([])

const getUserSearch = async () =>{
    try{
        const res = await axios.get(`${DB_URL}/todo/${userSearch}`)
        setSearchToDo(res.data.searchToDos)
    }catch(e){
        console.error(e)
    }
}
return(
    <div>
        <div>
            <h2>Find ToDos!</h2>
        <input type="text" onChange={(e) => setUserSearch(e.target.value)}  onKeyUp={(e) =>{
            if(e.keyCode === 13){
                getUserSearch()
            }}}></input>
        </div>
        <div>
            {searchToDo.map((todo) =>(
                <div className='searchToDo'>
                    <p>{todo.toDo}</p>
                </div>
            ))}
        </div>

    </div>

)

}
export default Search 