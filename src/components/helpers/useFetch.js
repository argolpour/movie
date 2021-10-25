import {useState , useEffect} from 'react'
import axios from "axios"
const useFetch = (url) => {
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
       axios.get(url).then ((response)=> {
            setMovies(response.data);
       }).catch ((err)=> {
           setError(err)
       }).finally(()=> {
           setLoading(false);
       })
    }, [url])
    return {movies,loading,error};
}


export default useFetch
