import './Home.css'
import Movies from './Movies';
import Slider from './../../layout/header/Slider';
const Home = () => {

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
