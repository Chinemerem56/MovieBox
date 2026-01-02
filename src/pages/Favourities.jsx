import { useMovieContext } from "../context/Moviecontext";
import Movieapp from "../components/Movieapp";
import { useState } from "react";
import YouTube from "react-youtube";

function Favourities() {
  const { favourites } = useMovieContext();
  const [trailer, setTrailer] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchTrailer = async (movieId) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${"e15857fc8a8ff769d4446ff4bff5955b"}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const trailerVideo = data.results.find(video => video.type === "Trailer" && video.site === "YouTube");
      if (trailerVideo) {
        setTrailer(trailerVideo.key);
        setSelectedMovie(movieId);
      } else {
        alert("No trailer available for this movie.");
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
      alert("Failed to load trailer. Check your network or API key.");
    }
  };

  const closeTrailer = () => {
    setTrailer(null);
    setSelectedMovie(null);
  };

  if (favourites && favourites.length > 0) {
    return (
      <div className="my-favourities-page">
        <h2>YOUR FAVOURITES</h2>
        {trailer && (
          <div className="trailer-modal">
            <button onClick={closeTrailer}>Close</button>
            <YouTube videoId={trailer} opts={{ width: "100%", height: "400" }} />
          </div>
        )}
        <div className="movie-list">
          {favourites.map((movie) => (
            <div key={movie.id} onClick={() => fetchTrailer(movie.id)}>
              <Movieapp movie={movie} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="favourities-page">
        <h1>No Favourities Movie Yet</h1>
        <p>Start Adding Movies To Your Favourities So That They Will Show Here</p>
      </div>
    );
  }
}

export default Favourities;