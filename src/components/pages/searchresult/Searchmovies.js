
import Searchmovie from './Searchmovie'
import movieContext from './../../../context/movieContext/movieContext';
import { useContext } from 'react';


const Searchmovies = () => {
 const {searchmovies}=useContext(movieContext)
 console.log(searchmovies);

    return (
        <div className="movies-box">
     { searchmovies?.map((movie) => (
        <Searchmovie movie={movie} key={movie.id} />
      ))}
    </div>
    )
}

export default Searchmovies
