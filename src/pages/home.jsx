import Movieapp from "../components/Movieapp";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/Api";
import YouTube from "react-youtube";

function Home() {
  const array = useState("");
  const searchTerm = array[0];
  const setSearchTerm = array[1];

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [trailer, setTrailer] = useState(null); // State for the trailer
  const [selectedMovie, setSelectedMovie] = useState(null); // State for selected movie

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.log(error);
        setError("FAILED TO LOAD MOVIES. CHECK YOUR DATA OR NETWORK");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!searchTerm.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchTerm);
      setMovies(searchResults);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("CHECK YOUR DATA");
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <div className="home-page">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search movies"
          className="search-input"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading Movies...</div>
      ) : (
        <div className="movie-list">
          {movies.map((movie) => (
            <div key={movie.id} onClick={() => fetchTrailer(movie.id)}>
              <Movieapp movie={movie} />
            </div>
          ))}
        </div>
      )}

      {trailer && (
        <div className="trailer-modal">
          <button onClick={closeTrailer}>Close</button>
          <YouTube videoId={trailer} opts={{ width: "100%", height: "400" }} />
        </div>
      )}
    </div>
  );
}

export default Home;