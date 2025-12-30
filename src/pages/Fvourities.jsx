import{ useMovieContext } from "../context/Moviecontext"
import Movieapp from "../components/Movieapp"

function Favourities(){

  const {kosi}= useMovieContext();

  if (kosi) {

      return (
      <div className="my-favourities-page">
            <h2>YOUR FAVOURITES</h2>
      <div className="movie-list">
      {kosi.map((movie) =>(
            <Movieapp movie={movie} key={movie.id} />))}
        
     </div>
     </div>)
     }
      
     
      return (
            <div className="favourities-page">
                  <h1>No Favourities Movie Yet</h1>
                  <p> Start Adding Movies To Your Favourities So That They Will Show Here</p>
            </div>
      )
  }
      
     

export default Favourities;