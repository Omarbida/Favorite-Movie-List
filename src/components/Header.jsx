import { useState } from "react";
import useMovie from "../hooks/useMovie";

function Header() {
  const MovieContext = useMovie();
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  return (
    <div className="head">
      <h1>Favorite Movies</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (title != "" && poster != "") {
            MovieContext.addMovie(title, poster);
            setPoster("");
            setTitle("");
          }
        }}
      >
        <input
          placeholder="Movie Title"
          value={title}
          type={"text"}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Poster URL"
          value={poster}
          type={"text"}
          onChange={(e) => setPoster(e.target.value)}
        />
        <button>Add Movie</button>
      </form>
    </div>
  );
}

export default Header;
