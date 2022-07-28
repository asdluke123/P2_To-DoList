import axios from 'axios'
import ToDo from '../components/ToDo'
import {useState } from 'react'
import { DB_URL } from '../global'
const Search = () =>{
const [userSearch,setUserSearch] = useState()
const [searchToDo,setSearchToDo] = useState([])

const getUserSearch = async () =>{
    try{
        const res = await axios.get(`${DB_URL}/todo/${userSearch}`)
        console.log(res)
    }catch(e){
        console.error(e)
    }
}
return(
    <div>
        <input type="text" onChange={(e) => setUserSearch(e.target.value)}  onKeyUp={(e) =>{
            if(e.keyCode === 13){
                getUserSearch()
            }}}></input>
    </div>

)

}
export default Search 