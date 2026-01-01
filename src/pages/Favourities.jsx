import{ useMovieContext } from "../context/Moviecontext"
import Movieapp from "../components/Movieapp"

function Favourities (){

  const { favourites } = useMovieContext ();

  if (favourites && favourites.length > 0) {
      return (
      <div className="my-favourities-page">
            <h2>YOUR FAVOURITES</h2>
      <div className="movie-list">
      {favourites.map((movie) =>(
            <Movieapp movie={movie} key={movie.id} />
            ))}
        
     </div>
     </div>
     );
     }  else {
      return (
            <div className="favourities-page">
                  <h1>No Favourities Movie Yet</h1>
                  <p> Start Adding Movies To Your Favourities So That They Will Show Here</p>
            </div>
      );
}
  }
      
     

export default Favourities;