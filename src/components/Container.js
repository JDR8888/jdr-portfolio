import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Home from '../pages/home';
import About from '../pages/About.js';
import Projects from '../pages/Projects.js';
import Contact from '../pages/Contact.js';
import Resume from '../pages/Resume.js'
import Footer from './Footer'

import '../assets/css/Container.css'

export default function Container() {

useEffect(() => {
    document.title = `${currentPage} | Jake Rudlong` 
})

const[currentPage, setCurrentPage] = useState('Home');

const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
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
        <Footer />
    </div>
);
}
