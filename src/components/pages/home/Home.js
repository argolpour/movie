import './Home.css'
import Movies from './Movies';
import Slider from './../../layout/header/Slider';
import movieContext from './../../../context/movieContext/movieContext';
import { useContext,useEffect } from 'react';

const Home = () => {

const { ComingSoonMovies}=useContext(movieContext);
    useEffect(()=>{
        ComingSoonMovies();
        // eslint-disable-next-line
       },[])
    return (
        <>
        <div className=" container-fluid slider">
                 
        <Slider />
      </div>
        <div className="movies-wrapper">
          
            <Movies/>
                       
        </div>
        </>
    )
}

export default Home
