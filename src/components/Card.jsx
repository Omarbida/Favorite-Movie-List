import useMovie from "../hooks/useMovie";

function Card(props) {
  const MovieContext = useMovie();
  return (
    <div className="card">
      <button
        title="Delete"
        onClick={() => {
          MovieContext.removeMovie(props.index);
        }}
        className="del"
      >
        X
      </button>
      <div className="poster">
        <img src={props.poster}></img>
      </div>
      <p>{props.title}</p>
    </div>
  );
}

export default Card;
