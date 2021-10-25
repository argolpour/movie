import { useContext} from "react";
import Movie from "./Movie";
import movieContext from './../../../context/movieContext/movieContext';
const Movies = () => {
  const {movies} = useContext(movieContext);
 
   return (
    <div className="movies-box">
     { movies?.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Movies;



