import { Link } from 'react-router-dom'
import './Searchresult.css'
const searchmovie = ({movie}) => {
   
       return (
     
           <div className="movie-card">
            <img src={movie.image} alt={movie.title}/>
                  
            <p className="title">{movie.title}</p>
            <Link  to={`/movie/${movie.id}`}></Link>
            
            </div>
           
        
    )
}

export default searchmovie
