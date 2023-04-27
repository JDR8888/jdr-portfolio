import React from 'react';
import Card from '../components/Card'; // Import the Card component from the Card.js file
import image1 from '../assets/images/love-hungry.png';
import groupieDemo from '../assets/images/groupie-demo-optimized-gif.gif';
import '../assets/css/projects.css';
import '../assets/projectView.js';
import loveDemo from '../assets/images/Love-hungry-demo-2.gif';
import gameDemo from '../assets/images/Gameboxd-demo.gif'

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
      title: 'Project 2',
      description: 'Description of Project 2',
      image: groupieDemo,
    },
    {
      title: 'Love Hungry',
      description: 'laskjf;lkasjfljasf;jasdhg;lksdhnfkdsnalk;fjsdkl;fjlkjadslkfm,dsfmnsdnfkljsdklfnsadkfsdjkfhksdljf;kjdslfkndskfnkldsf;klsdjakfljsdlkfmsndjfnjknejknke;lkaslkflkwnl;jfd.',
      image: loveDemo,
      link: 'https://love-hungry.herokuapp.com/',
      repo: ''
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