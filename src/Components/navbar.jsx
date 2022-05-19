import React, { Component } from 'react';
class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <nav className='rounded'>
            <ul>
                <li><a href="#home"> Intro </a></li>
                <li><a href="#story">Main Story</a></li>
                <li><a href="#game">Game</a></li>
                <li><a href="#anime">Anime</a></li>
                <li class="topnav" onclick="openNav()" style="float:right;"><a href="#">Contact Us</a></li>
            </ul>
            </nav>
        );
    }
}
 
export default Navbar;
