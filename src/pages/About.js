import React from "react";
import '../assets/css/About.css';
import myPicture from '../assets/images/jdr-portfolio-pfp.jpg'
import { DiReact, DiCss3, DiJavascript, DiMongodb, DiMysql, DiPython, DiGit, DiMarkdown, DiNodejs, DiNpm, DiVisualstudio } from 'react-icons/di';
import Divider from '@mui/material/Divider';

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

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-blurb-container">
          <h2 className="about-blurb-title">About Me</h2>
          <p className="about-blurb-text">I am an Air Force veteran with a strong background in STEM, with 6 years of research in academia. I first began coding in 2015 and have loved it ever since.</p>
        </div>
        <Divider variant="inset" className="divide" />
        <div className="half-container">
          <div className="left-half-container">
            <table className="about-skills-table">
              <thead>
                <tr>
                  <th colSpan="2" className="skills-table-header">Some Skills of Mine</th>
                </tr>
              </thead>
              <tbody>
                {listItems.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                    <td className="desc">{item.text}</td>
                    <td className="icons">{item.icon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="right-half-container">
            <div className="about-image">
              <img src={myPicture} alt="My Picture" />
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default About;

