import React from "react";
import  '../assets/css/Home.css';
// import myPicture from '../assets/images/jdr-portfolio-pfp-svg.svg';
import myPicture from '../assets/images/jdr-portfolio-pfp.jpg'
import {DiReact, DiCss3, DiJavascript, DiMongodb, DiMysql, DiPython, DiGit, DiMarkdown, DiNodejs, DiNpm, DiVisualstudio} from 'react-icons/di';

const listItems = [
  { text: 'React', icon: <DiReact /> },
  { text: 'CSS3', icon: <DiCss3 /> },
  { text: 'JavaScript', icon: <DiJavascript /> },
  { text: 'MongoDB', icon: <DiMongodb /> },
  { text: 'MySQL', icon: <DiMysql /> },
  { text: 'Git/version control', icon: <DiGit /> },
  { text: 'Markdown', icon: <DiMarkdown /> },
  { text: 'Node.js', icon: <DiNodejs /> },
  { text: 'NPM', icon: <DiNpm /> },
  { text: 'VSCode', icon: <DiVisualstudio /> },
];

const Home = () => {
    return (
      <div className="home-container">
        <div className="home-content">
          <div className="home-blurb">
            <p className="about-blurb-text">I am an Air Force veteran with a strong background in STEM, with 6 years of research in academia. I first began coding in 2015 and have loved it ever since.</p>
            <h3>Some Skills of mine</h3>
            <ul>
          {listItems.map((item, index) => (
            <li key={index}>
              <span className="list-item-text">{item.text}</span>
              <span className="list-item-icon">{item.icon}</span>
            </li>
          ))}
          </ul>
        
          </div>
          <div className="home-image">
          <img src={myPicture} />
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;