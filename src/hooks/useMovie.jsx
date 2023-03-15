import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

const useMovie = () => useContext(MovieContext);

export default useMovie;
