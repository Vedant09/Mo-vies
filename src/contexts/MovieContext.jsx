import { createContext, useState, useEffect, useContext } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favs");

    if (storedFavs) setFav(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(fav));
  }, [fav]);

  const addToFavs = (movie) => {
    setFav((prev) => [...prev, movie]);
  };

  const removeFromFavs = (movieId) => {
    setFav((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavs = (movieId) => {
    return fav.some((movie) => movie.id === movieId);
  };

  const value = {
    fav,
    addToFavs,
    removeFromFavs,
    isFavs,
  };

  return <MovieContext.Provider value = {value}>{children}</MovieContext.Provider>;
};
