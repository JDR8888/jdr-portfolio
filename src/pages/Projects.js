import React from 'react';
import Card from '../components/Card'; // Import the Card component from the Card.js file
import image1 from '../assets/images/love-hungry.png';
import '../assets/css/projects.css';
import '../assets/projectView.js';

const Portfolio = () => {
  // Array of project data with title, description, and image properties
  const projects = [
    {
      title: 'Love-Hungry',
      description: 'A dating/social networking site setting dates based on shared food preferences; Express.js, Handlebars.js, SQL/Sequelize, sessions, heroku',
      image: image1,
      link: ''
    },
  
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      image: image1,
    },
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
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </section>
        ))}
    </div>
  );
};

export default Portfolio;