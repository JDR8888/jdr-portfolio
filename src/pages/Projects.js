import React from 'react';
import Card from '../components/Card'; // Import the Card component from the Card.js file
import image1 from '../assets/images/love-hungry.png';
import groupieDemo from '../assets/images/groupie-demo-optimized-gif.gif';
import '../assets/css/projects.css';
import '../assets/projectView.js';
import loveDemo from '../assets/images/Love-hungry-demo-2.gif';
import gameDemo from '../assets/images/Gameboxd-demo.gif'
import weatherDemo from '../assets/images/weather-demo.gif'

const Portfolio = () => {
  // Array of project data with title, description, and image properties
  const projects = [
    {
      title: 'Gameboxd',
      description: "Letterboxd for videogames. Fullstack app featuring React.js, Express.js, JWT, MongoDB/GraphQL, 3rd-party APIs, and more. Create a profile, view other people's reviews of video games. Search for any video game you like from the search page, where you can add your review! check out your profile page when logged in to look back on reviews you've left.",
      image: gameDemo,
      link: 'https://gameboxed.herokuapp.com/',
      repo: 'https://github.com/Smulchman/gameboxd'
    },
    {
      title: 'Love Hungry',
      description: "Find love through food. A unique dating app - signup and pick an avatar, set your food preferences, and choose which borrough of NYC you live in/would like to eat in. We filter by your location and food preference, and use this information to connect you with other people in the same area who share your food preferences. This project uses mySQL with sequelize.js, handlebars.js for page rendering, an express.js server, a microsoft maps API, an exhaustive (and recent) dataset of NYC restaurants, and the Bulma CSS framework for styling." ,
      image: loveDemo,
      link: 'https://love-hungry.herokuapp.com/',
      repo: ''
    },
     {
      title: 'Project 2',
      description: 'Description of Project 2',
      image: groupieDemo,
    },
    {
      title: 'Weather or not',
      description: "Fun little project using openweathermap's geo-locator api, 5-day forecase api, and current-weather api. Uses JQuery and Bootstrap CSS, with localstorage for persistent data." ,
      image: weatherDemo,
      link: 'https://jdr8888.github.io/weather-or-not/',
      repo: 'https://github.com/JDR8888/weather-or-not'
    }
    // Add more projects to the array as needed
  ];

  return (
    <div style={{ maxWidth: '60%', margin: '0 auto' }}>
        {projects.map((project, index) => (
          <section key={index} className='show'>
            {/* Render each project as a Card component */}
            <Card
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              repo={project.repo}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </section>
        ))}
    </div>
  );
};

export default Portfolio;