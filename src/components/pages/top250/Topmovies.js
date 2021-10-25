import Topmovie from './Topmovie';
const Topmovies = ({top250data}) => {

    return (
        <div className="movies-box">
     { top250data?.items.map((movie) => (
        <Topmovie movie={movie} key={movie.id} />
      ))}
    </div>
    )
}

export default Topmovies
