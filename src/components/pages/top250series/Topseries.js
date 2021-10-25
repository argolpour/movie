import Topserie from './Topserie';
const Topmovies = ({top250series}) => {

    return (
        <div className="movies-box">
     { top250series?.items.map((movie) => (
        <Topserie movie={movie} key={movie.id} />
      ))}
    </div>
    )
}

export default Topmovies
