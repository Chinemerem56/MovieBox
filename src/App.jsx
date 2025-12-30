import Navbar from './Components/Navbar';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Home from './Components/home.jsx';
import NotFound from './Components/NotFound.jsx';
import Listform from'./Components/Listform.jsx';
import Redirect from'./Components/Redirect.jsx';
import Todo from'./Components/Todo.jsx';
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  

  return (
    <>
   
    
     <Router>
 <Navbar/>
 <Routes>
  <Route path='/' element={< Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/service' element={<Service />} />
  <Route path='/contact' element={<Contact />} />
  <Route path='/listform' element={<Listform />} />
  <Route path='/Redirect' element={<Redirect />} />
  <Route path='/Todo' element={<Todo />} />
  <Route path='/*' element={<NotFound />} />
 </Routes>
     </Router>

    </>
  )
}

export default App
