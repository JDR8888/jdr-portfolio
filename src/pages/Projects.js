import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper'; // Import Swiper.js modules
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper.js React components
import 'swiper/swiper-bundle.min.css'; // Import Swiper.js styles
import Card from '../components/Card'; // Import the Card component from the Card.js file
import image1 from '../assets/images/love-hungry.png';
// Install Swiper.js modules
SwiperCore.use([Navigation, Pagination]);

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
      image: 'project2.jpg',
    },
    // Add more projects to the array as needed
  ];

  return (
    <div style={{ maxWidth: '555px', margin: '0 auto' }}>
      {/* Render Swiper component to wrap Card components */}
      <Swiper
        navigation
        pagination
        style={{ width: '100%', height: '100%' }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            {/* Render each project as a Card component */}
            <Card
              title={project.title}
              description={project.description}
              image={project.image}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;