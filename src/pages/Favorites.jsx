import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {

    const {fav} = useMovieContext();

    if(fav) return (
        <>
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {fav.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        </>
    )

    return (
        <div className="favorites-empty">
            <h2>No Favorites Movies Yet</h2>
            <p>Start adding Movies to your favorites list and they will apear hear at this page</p>
        </div>
    )
}

export default Favorites