
import './css/App.css'
import Favorites from './pages/Favorites.jsx';
import Home from './pages/Home.jsx';
import NavBar from "./components/NavBar";

import {Routes,Route} from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext.jsx';


function App() {



  return (
    <MovieProvider>
    <NavBar/>
    <main className="main-content">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>
      </Routes>
    </main>
    </MovieProvider>
  )
}


export default App;