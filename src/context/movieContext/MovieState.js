import { useReducer} from 'react';
import MovieContext from './movieContext';
import {GET_MOVIES,SET_LOADING,GET_MOVIE,GET_SEARCHED_MOVIES,GET_TRAILER,GET_PERSON} from '../Types'
import movieReducer from './movieReducer'
const MovieState = ({children}) => {
    const initialState={
        movies:[],
        searchmovies:[],
        movie:{},
        trailer:{},
        person:{},
        loading:false
    };
const [state, dispatch] = useReducer(movieReducer, initialState)
   const ComingSoonMovies=async()=>{
   setLoading()
    await fetch(`https://imdb-api.com/en/API/ComingSoon/k_l7p4itew`)
    .then(response => response.json())
    .then(data => dispatch({type:GET_MOVIES,payload:data.items}))
   }

   
  const searchHandler=async (movieName)=>{
    setLoading()
   await fetch (`https://imdb-api.com/en/API/SearchTitle/k_l7p4itew/${movieName}`).then(respond=>respond.json()).then(data=>{
      dispatch({type:GET_SEARCHED_MOVIES,payload:data.results})
     
   }).catch((err)=>{
       // setError("there is no data");
       console.log(err);
   }).finally(()=>{
      
   })
 }

 const fetchMovieData=async (id)=>{
  await fetch(`https://imdb-api.com/en/API/Title/k_13evw331/${id}`)
   .then(response => response.json())
   .then(data => dispatch({type:GET_MOVIE,payload:data}))
}
const fetchMovieTrailer=(id)=>{
   fetch(`https://imdb-api.com/en/API/Trailer/k_13evw331/${id}`)
   .then(response => response.json())
   .then(data =>dispatch({type:GET_TRAILER,payload:data}))
}

const fetchPersonData=async (id)=>{
  setLoading();
  await fetch(` https://imdb-api.com/en/API/Name/k_13evw331/${id}`)
   .then(response => response.json())
   .then(data => dispatch({type:GET_PERSON,payload:data}))
}
 
       
       
 const setLoading=()=>(dispatch({type:SET_LOADING}))
    return (
      <MovieContext.Provider value={{...state,ComingSoonMovies,searchHandler,fetchMovieData,fetchMovieTrailer,fetchPersonData}}>{children}</MovieContext.Provider>
    )
}

export default MovieState
