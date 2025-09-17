import { useMovieContext } from "../contexts/MovieContext";
import "../css/Favorites.css";
function Favorites() {
  const { Favorites } = useMovieContext();

  if (Favorites) {
    return (
      <div className="movies-grid">
        {Favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    );
  }
  return (
    <div>
      <h2>Your favorites</h2>
      <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here </p>
      </div>
    </div>
  );
}

export default Favorites;
