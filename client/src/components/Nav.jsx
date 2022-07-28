import { Link } from 'react-router-dom'

const Nav = () =>{
    return(
        <header>
            <nav>
                <Link to = '/'>Home</Link>
                <Link to  = '/favorites'>Favorites</Link>
                <Link to = '/folders'>Folders</Link>
                <Link to = '/search'>Search</Link>
            </nav>
        </header>
    )
}

export default Nav