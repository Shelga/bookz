import React from 'react';
import './Header.css';
import img1 from './static/img1.jpg'

function Header() {
    return (
       
            <div className="header">
                <div className="logoName">Bookz</div>
                <input className="search" type="text" placeholder="Search books by name, genre and ect ..."></input>
                <div className="avatarName">
                    <img className="avatar" src={img1} alt="logo" />
                    <p className="name">Lachelle Hubbard</p>
                </div>
            </div>
        
    );
}

export default Header
