
import { useEffect ,useContext} from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Person.css';
import movieContext from './../../../context/movieContext/movieContext';

const Person = () => {

const {id}=useParams();
const {fetchPersonData,person}=useContext(movieContext);
useEffect(()=>{
    fetchPersonData(id);
    // eslint-disable-next-line
    // eslint-disable-next-line react-hooks/exhaustive-deps
   
},[id])
const personRole=person?.role?.split(",");


    return (

        <>
        <div className="container">
      <div className="  person-info-container">
          <div className="person-box">
        <div className="person-info">
            <h5 class="titr">{person.name}</h5>
            <ul>{personRole?.map((role)=><li >{role}</li>)}</ul>
        </div>
        <div className="person-image">
            <img src={person.image} alt={person.name}/>

        </div>
        </div>
      <div className="person-bio">
         
          <p>{person.summary}</p>
          {person.awards && <h4>{person.awards}</h4>}
      </div>
      </div>
      <div className=" movies-box">
         
          {person?.knownFor?.map(work=><div className="movie-card">
            <img src={work.image} alt={work.title}/>
                  
            <p className="title">{work.title}</p>
            <Link  to={`/movie/${work.id}`}></Link>
            
            </div>)}
      </div>
      </div>
       </>
    )
}

export default Person
