import { Link } from 'react-router-dom';
const Movie = ({movie}) => {

    return (
        <div className="movie-card">
            <img src={movie.image} alt={movie.title}/>
                    
            <p className="title">{movie.title}</p>
            <div className="country-year">
            <p>releaseState:{movie.releaseState}</p>
            <Link  to={`/movie/${movie.id}`}></Link>
            
            </div>
            
        </div>
    )
}

export default Movie
