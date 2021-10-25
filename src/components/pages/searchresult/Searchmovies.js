
import Searchmovie from './Searchmovie'


const Searchmovies = ({searchmovies}) => {
 

    return (
        <div className="movies-box">
     { searchmovies?.map((movie) => (
        <Searchmovie movie={movie} key={movie.id} />
      ))}
    </div>
    )
}

export default Searchmovies
