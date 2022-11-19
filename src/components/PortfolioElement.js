import React, { useState } from 'react';
import NavBar from './NavBar';
import About from './Directory/About';
import Contact from './Directory/Contact';
import Portfolio from './Directory/Portfolio';
import Resume from './Directory/Resume';

export default function PortfolioElement() {

    const [currentPage, setCurrentPage ] = useState('About');

    const renderPage = () => {
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <About />;
    };

    const handlePageChage = (page) => setCurrentPage(page);

    return (
        <div>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChage}/>
            {renderPage()}
        </div>
    );
}
