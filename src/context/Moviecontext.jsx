import { useContext, createContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites = localStorage.getItem("favourites");

    
    if (storedFavourites) setFavourites(JSON.parse(storedFavourites));
  }, []);


useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addFavourites = (movie) => {
    // Check for duplicates before adding
    if (!isFavourites(movie.id)) {
      setFavourites((prev) => [...prev, movie]);
    }
  };

  const removeFavourites = (movieId) => {
    setFavourites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavourites = (movieId) => {
    return favourites.some((movie) => movie.id === movieId);
  };

  const value = {
    favourites,
    addFavourites,
  removeFavourites,
    isFavourites,
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};