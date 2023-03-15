import { createContext, useCallback, useState } from "react";

export const MovieContext = createContext({
  movies: [],
  addMovie: () => {},
  removeMovie: () => {},
});
export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      title: "Batman: The Dark Knight Returns, Partie 1",
      poster:
        "https://img.yts.mx/assets/images/movies/Batman_The_Dark_Knight_Returns_Part_1_2012/medium-cover.jpg",
    },
    {
      title: "La cabane isolée",
      poster:
        "https://img.yts.mx/assets/images/movies/knock_at_the_cabin_2023/medium-cover.jpg",
    },
    {
      title: "Mayday",
      poster:
        "https://img.yts.mx/assets/images/movies/plane_2023/medium-cover.jpg",
    },
  ]);
  const addMovie = useCallback(
    (title, poster) => {
      let tempMovies = [...movies];
      tempMovies.push({
        title,
        poster,
      });
      setMovies(tempMovies);
    },
    [movies]
  );
  const removeMovie = useCallback(
    (i) => {
      let tempMovies = [...movies];
      tempMovies.splice(i, 1);
      setMovies(tempMovies);
    },
    [movies]
  );
  return (
    <MovieContext.Provider value={{ movies, addMovie, removeMovie }}>
      {props.children}
    </MovieContext.Provider>
  );
};
export const MoviesConsumer = MovieContext.Consumer;
