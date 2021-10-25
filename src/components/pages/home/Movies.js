import { useContext } from "react";
import { Context } from "./../../../App";
import Movie from "./Movie";

const Movies = () => {
  const movies = useContext(Context);
  
   return (
    <div className="movies-box">
     { movies?.items.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Movies;



