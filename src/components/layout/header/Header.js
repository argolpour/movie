import "./Header.css";
import logo from "../../../images/logo2.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "./Nav";
import movieContext from './../../../context/movieContext/movieContext';


const Header = () => {
const {searchHandler}=useContext(movieContext)
  const submitHandler=(e)=>{
    if (searchtitle) {
      searchHandler(searchtitle);
    setSearchtitle("");
    }
    else {
      e.preventDefault();
    }
    
  }
  const [searchtitle, setSearchtitle] = useState("");
  return (
    <header className="header">
      <div className="topHeader">
        <div className="login-box">
          <button className="btn">Log In /Sign up</button>
        </div>
        <div className="serach-box">
        <Link className="fas fa-search link-white"  to={`/search/${searchtitle}`}  onClick={(e) => {
              submitHandler(e);
            }}></Link>
          <input
            type="search"
            placeholder="Movie Name...."
            value={searchtitle}
            onChange={(e) => {
              setSearchtitle(e.target.value);
            }}
          />
        </div>
        <nav>
         <Nav/>
        </nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
     
    </header>
  );
};

export default Header;
