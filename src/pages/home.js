import React from "react";
import  '../assets/css/Home.css';
// import myPicture from '../assets/images/jdr-portfolio-pfp-svg.svg';
import myPicture from '../assets/images/jdr-portfolio-pfp.jpg'

const Home = () => {
    return (
      <div className="home-container">
        <div className="home-content">
          <div className="home-blurb">
            <p className="home-blurb-text">Hi, I'm Jake. I like creating cool websites, solving problems with code, hanging with my dog, and eating red meat.</p>
          </div>
          <div className="home-image">
            <img src={myPicture} />
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
