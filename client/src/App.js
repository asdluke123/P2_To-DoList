
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Folders from './pages/Folders'
import ListDetails from './pages/ListDetails'
import FolderDetails from './pages/FolderDetails'
import Favortie from './pages/Favorite'
import Nav from './components/Nav';
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
          {/* <Route path="/favorites" element={<Favortie />} /> */}
          <Route path="/folders" element={<Folders />} />
          {/* <Route path="/folders/:id" element={<FolderDetails />} />
          <Route path="list/:id" element={<ListDetails />} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App;
