import { Link } from 'react-router-dom'

const Nav = () =>{
    return(
        <header>
            <nav>
                <div>
                <Link to = '/'>Home</Link>
                <Link to  = '/favorites'>Favorites</Link>
                <Link to = '/folders'>Folders</Link>
                </div>
            </nav>
        </header>
    )
}

export default Nav