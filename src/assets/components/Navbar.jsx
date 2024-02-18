import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
            
            <Link to='/' style={{padding:'10px'}}> ALL </Link> 
            <Link to='/Fullstack' style={{padding:'10px'}}> FULLSTACK DEVELOPMENT </Link> 
            <Link to='/Cybersecurity' style={{padding:'10px'}}> CYBER SECURITY </Link> 
            <Link to='/Datascience' style={{padding:'10px'}}> DATA SCIENCE </Link> 
            <Link to='/Carrer' style={{padding:'10px'}}> CAREER </Link> 
            </nav>
        </div>
    );
};

export default Navbar;