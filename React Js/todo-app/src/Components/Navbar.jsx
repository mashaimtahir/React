import React, { Component } from 'react';

const NavBar = (props) => {
    return (
        <nav className='navbar navbar-light bg-light'>
            <a className='navbar-brand' href="#">
                Navbar{"  "}
                <span className='badge badge-pill bg-secondary'>{ props.totalCounters }</span>
            </a>
        </nav>
    );
}

export default NavBar;