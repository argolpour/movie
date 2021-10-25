import Topmovies from './Topmovies';
const Top250 = ({top250data}) => {

    return (
        <div className="movies-wrapper">
          
        <Topmovies top250data={top250data}/>
                   
    </div>
    )
}

export default Top250
