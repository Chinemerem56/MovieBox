import { useMovieContext } from "../context/Moviecontext"

function MovieApp({movie}) {
 
  const{isFavourites,addFavourites,removeFavourites}= useMovieContext()

  const favour=isFavourites(movie.id)

      const handleButton=(event)=>{
          event.preventDefault() 
          if(favour) removeFavourites(movie.id)
            else addFavourites(movie)
      }
      return(
            <div className="movie-boxcontainer">
                  <div className="movie-app">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}alt={movie.title} className="img-picture" />
                        <div className="movie-overlay">
                             <button className= {`movie-button ${favour ? "active": ""}`} onClick={handleButton}>🤍</button>
                        </div>
                  </div>
                  <div className="movie-info">
                        <h3>{movie.title}</h3>
                        <p>{movie.year?.split('-')[0]}</p>
                  </div>
            </div>
      )
}
export default MovieApp;