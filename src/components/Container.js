import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Home from '../pages/home';
import About from '../pages/About.js';
import Projects from '../pages/Projects.js';
import Contact from '../pages/Contact.js';
import Resume from '../pages/Resume.js'
import Footer from './Footer'
import '../assets/css/Header.css'
import jdrIcon from '../assets/images/jdr-icon.png'
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
      <div className="header-container">
        <div className="icon-container">
        <img src={jdrIcon} width={'50px'}/>
        </div>
        <div className="name-container">
          <h1 className="name"> &lt; Jake Rudlong &gt;</h1>
        </div>
      </div>
        {/* <Header /> */}
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
    </div>
);
}
