import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { getPopularMovies, searchMovies } from "../services/api";
function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError(`Failed to load movies ...`);
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handlesearch = async(e) => {
    e.preventDefault();
    if(!searchQuery.trim())return
    if(loading) return
    setLoading(true);
    try {
        const searchResults = await searchMovies(searchQuery);
        setMovies(searchResults);
        setError(null);
    } catch (error) {
        console.log(error);
        setError("Failed to Search movies");
    }finally{
        setLoading(false);
    }
    
    setSearchQuery("");
  };
  return (
    <div className="home">
      <form action="" onSubmit={handlesearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movie..."
          value={searchQuery}
          className="search-input"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-message"></div>}
      {loading?<div className="loading">Loading...</div> : <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>}
      
    </div>
  );
}

export default Home;
