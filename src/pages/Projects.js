import React from 'react';
import Card from '../components/Card'; // Import the Card component from the Card.js file
import image1 from '../assets/images/love-hungry.png';
import groupieDemo from '../assets/images/groupie-demo-optimized-gif.gif';
import '../assets/css/projects.css';
import '../assets/projectView.js';
import loveDemo from '../assets/images/love-hungry-demo.gif';

const Portfolio = () => {
  // Array of project data with title, description, and image properties
  const projects = [
    {
      title: 'Love-Hungry',
      description: 'A dating/social networking site setting dates based on shared food preferences; Express.js, Handlebars.js, SQL/Sequelize, sessions, heroku',
      image: image1,
      link: 'https://love-hungry.herokuapp.com/'
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
    }
    // Add more projects to the array as needed
  ];

  return (
    <div style={{ maxWidth: '555px', margin: '0 auto' }}>
        {projects.map((project, index) => (
          <section key={index} className='show'>
            {/* Render each project as a Card component */}
            <Card
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </section>
        ))}
    </div>
  );
};

export default Portfolio;