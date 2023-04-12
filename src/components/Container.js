import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from '../pages/home';
import About from '../pages/About.js';
import Projects from '../pages/Projects.js';
import Contact from '../pages/Contact.js';
import Resume from '../pages/Resume.js'

export default function Container() {
const[currentPage, setCurrentPage] = useState('Home');

const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
    }
    return <Home />;
  };

const handlePageChange = (page) => setCurrentPage(page);

// jsx to be returned
return (
    <div>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
    </div>
);
}
