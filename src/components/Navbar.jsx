import{ Link} from "react-router-dom";

function Navbar(){
      
      return(
            <div className="navbar">
                  <div className="nav-logo">
                        <Link to="/"className="nav-container-logo">Movie Website</Link>
                     
                  </div>
                  <div className="nav-links">
                        <Link to="/" className="home-link">Home</Link>
                        <Link to="/favourities" className="favourities-link">Favourites</Link>
                  </div>
            </div>
      )
}
export default Navbar;