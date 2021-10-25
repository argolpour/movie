import './Movie.css'
import { useEffect,useContext} from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import movieContext from './../../../context/movieContext/movieContext';

const Movieinfo = () => {

const {id}=useParams();
const {fetchMovieData,movie,fetchMovieTrailer,trailer}=useContext(movieContext);
useEffect(()=>{
    fetchMovieData(id);
    fetchMovieTrailer(id);
    // eslint-disable-next-line
},[id])
console.log(movie?.boxOffice?.budget);
    return (

        <>
        
       <div className="top">
         
               <div className="movie-poster">
                   <img src={movie.image} alt={movie.title}/>
               </div>
               <div className="scores titr">
              {movie.imDbRating && <p className="imdb-rate"><i class="fab fa-imdb"></i>{movie.imDbRating}</p>} 
              {movie.contentRating && <p className="imdb-rate">{movie.contentRating}</p>} 
               
                             
               </div>
               <div className="movie-title titr">
                <h3 className="titr">{movie.title}</h3>
               {movie?.directorList?.length>=1 ? <p className="director-title titr"><span>Director : </span>{movie?.directorList?.map(director=><Link className="link-light" to={`/person/${director.id}`} >  {director?.name}</Link>)}</p> : <p className="director-title titr"><span>Director : </span>--</p>}
               {movie?.writerList?.length>=1 ? <p className="director-title titr"><span>Writers : </span>{movie?.writerList?.map(writer=><Link className="link-light" to={`/person/${writer.id}`} >  {writer?.name}</Link>)}</p> : <p className="director-title titr"><span>writer : </span>--</p>}
                <h6 className="titr">{movie.year}</h6>
               </div>
          
       </div>
       <div className="trailer-plot">
           <div className="plot">
               <p className="titr">{movie.genres}</p>
               <p>{movie.plot}</p>
               <a href={trailer.link} className="btn btn-block btn-warning">Watch  Trailer</a>
           </div>
           <div className="box-office titr" >
            <h5 >Box Office</h5>
           {movie?.boxOffice?.budget ? <p><strong>Budget</strong> <span>{movie?.boxOffice?.budget}</span></p> :  <p><strong>Budget</strong> <span>--</span></p>}
           
           <hr className="line"/>
           {movie?.boxOffice?.openingWeekendUSA ? <p><strong>Opening Week</strong> <span>{movie?.boxOffice?.openingWeekendUSA}</span></p> : <p><strong>Opening Week</strong> <span>--</span></p> } 
            <hr/>
             {movie?.boxOffice?.cumulativeWorldwideGross ?<p><strong>World Selling</strong> <span>{movie?.boxOffice?.cumulativeWorldwideGross}</span></p> : <p><strong>World Selling</strong> <span>--</span></p>}
            
           </div>
       </div>
       <div class="cast container">
           <div className="cast-header">
               <h3>Actors</h3>
           </div>
           <div className="actor-container">
           {movie?.actorList?.map(actor=>(
               <div className="actor-box" key={actor.id}>
                   <div className="actor-image">
                   <img src={actor.image} alt={actor.name}/>
                   </div>
                   <div className="actor-info">
                   
                   {/* <p>as  {actor.asCharacter}</p> */}
                   <Link   to={`/person/${actor.id}`}><p><strong>{actor.name}</strong></p></Link>
                   </div>

               </div>
              
           ))}
            </div>
       </div>
       </>
    )
}

export default Movieinfo
