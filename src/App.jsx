import{Routes,Route} from"react-router-dom" 
import './App.css'
import Home from './pages/home.jsx'
import Favourities from './pages/Favourities.jsx'
import{ MovieProvider }from './context/Moviecontext.jsx'
import Navbar from './components/Navbar.jsx'

function App() {

  return(
 <MovieProvider>
 
 <Navbar  className="navbar-container"/>
 <Routes >
  <Route path="/" element={<Home />}
   />
   <Route path="/favourities" element= {<Favourities />} />
 </Routes>

 </MovieProvider>
  )
}
 
export default App
