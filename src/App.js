import "./App.css";
import Header from "./components/layout/header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Notfound from "./components/pages/notfound/Notfound";
import Searchresult from './components/pages/searchresult/Searchresult';
import Movieinfo from "./components/pages/movieinfo/Movieinfo";
import Person from './components/pages/actorinfo/Person';
import Top250 from './components/pages/top250/Top250';
import top250data from './top250data.json'
import top250series from './top250seriesdata.json'
import Top250series from './components/pages/top250series/Top250series'
import MovieState from './context/movieContext/MovieState';


function App() {
   
  return (
    <>
      <Router>
      <MovieState>
        <Header />
        <Switch>
          <Route path="/" exact>
           
           <Home />
          
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
         <Route path={`/search/:title`} exact>
           {/* {loading && <div class="spinner"></div>} */}
         <Searchresult />
         </Route>
         <Route path='/movie/:id' exact>
          <Movieinfo/>
         </Route>
         <Route path='/person/:id' exact>
          <Person/>
         </Route>
         <Route path= "/top-250-movies" exact>
       <Top250 top250data={top250data}/>
         </Route>
         <Route path= "/top-250-series" exact>
       <Top250series top250series={top250series}/>
         </Route>
          <Route>
            <Notfound />
          </Route>
        </Switch>
        </MovieState>
      </Router>
    </>
  );
}

export default App;
