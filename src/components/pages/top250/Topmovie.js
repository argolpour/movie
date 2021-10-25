import { Link} from 'react-router-dom';
const Topmovie = ({movie}) => {

    return (
        <div className="movie-card">
            <img src={movie.image} alt={movie.title}/>
            <div className="rank">
                <p>{movie.imDbRating}</p>
                <p>{movie.rank}</p>
            </div>
                    
            <p className="title">{movie.title}</p>
            <div className="country-year">
            <p>{movie.year}</p>
            <Link  to={`/movie/${movie.id}`}></Link>
            
            </div>
            
        </div>
    )
}

export default Topmovie
