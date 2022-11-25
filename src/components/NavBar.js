import React from 'react';

function NavBar({ currentPage, handlePageChange }) {
    return (
        <nav className='navbar navbar-expand-lg bg-light'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='#'>Mostafa Maki</a>
                <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls='navbarNav' aria-expanded="false" aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a href='#about' onClick={() => handlePageChange('About')}
                                className={currentPage === 'About' ? 'nav-link text-primary' : 'nav-link'}
                            >About Me</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#portfolio' onClick={() => handlePageChange('Portfolio')}
                                className={currentPage === 'Portfolio' ? 'nav-link text-primary' : 'nav-link'}
                            >Portfolio</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#contact' onClick={() => handlePageChange('Contact')}
                                className={currentPage === 'Contact' ? 'nav-link text-primary' : 'nav-link'}
                            >Contact</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#resume' onClick={() => handlePageChange('Resume')}
                                className={currentPage === 'Resume' ? 'nav-link text-primary' : 'nav-link'}
                            >Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;