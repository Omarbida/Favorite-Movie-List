import useMovie from "../hooks/useMovie";
import Card from "./Card";

function List() {
  const MovieContext = useMovie();
  return (
    <div className="container">
      {MovieContext.movies?.map((movie, i) => {
        return (
          <Card
            key={movie.title + movie.poster}
            title={movie.title}
            poster={movie.poster}
            index={i}
          />
        );
      })}
    </div>
  );
}
export default List;
