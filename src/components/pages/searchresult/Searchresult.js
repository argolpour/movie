import Searchmovies from "./Searchmovies"

const Searchresult = ({searchmovies}) => {
    return (
        <div className="movies-wrapper">
        <Searchmovies searchmovies={searchmovies} />
                   
    </div>
    )
}

export default Searchresult
