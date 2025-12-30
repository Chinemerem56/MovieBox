import {Link} from 'react-router-dom'
import image from '../assets/react.svg'
import "../index.css"

function Navbar(){
      const linkstyle={
            color:'white',
            textDecoration:'none',
            Fontfamily:'san-serif',
            fontSize:'30px',
      }
      return(
            <>
      <div className='navbar'>
            <div className='img'>
                  <img src={image}alt="" width="100px" style={{borderRadius:"300%"}}/>
            </div>
            <div className='links'>

                   <Link to='/' style={linkstyle}> HOME</Link> 
                   <Link to="/about"style={linkstyle}>About</Link> 
                   <Link to="/service"style={linkstyle}>Service</Link> 
                   <Link to="/ contact"style={linkstyle}>Contact</Link> 
                   <Link to="/listform"style={linkstyle}>List</Link> 
                   <Link to="/Redirect"style={linkstyle}>Redirect</Link> 
                   <Link to="/Todo"style={linkstyle}> Todo</Link> 
            </div>
      </div>

            </>
      )
}
export default Navbar