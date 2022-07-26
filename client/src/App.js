
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Folders from './pages/Folders'
import ListDetails from './pages/ListDetails'
import FolderDetails from './pages/FolderDetails'
import Favorite from './pages/Favorite'
import Nav from './components/Nav';
import Search from './pages/Search';
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/folders" element={<Folders />} />
          <Route path="/folders/:name/:id" element={<FolderDetails />} />
          <Route path="list/:name/:id" element={<ListDetails />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
