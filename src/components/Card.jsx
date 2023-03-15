import useMovie from "../hooks/useMovie";

function Card(props) {
  const MovieContext = useMovie();
  return (
    <div className="card">
      <div className="poster">
        <img src={props.poster}></img>
      </div>
      <p>{props.title}</p>
    </div>
  );
}

export default Card;
