import React from 'react';
import './Startplace.css';
import img1 from './static/img1.jpg'

function Startplace() {
    return (
        <div className="startplace">
        <div classNane="search">Bookz</div>
        <input className="search" type="text" placeholder="Search books by name, genre and ect ..."></input>
        <div className="avatarName"> 
            <img className="avatar" src={img1} alt="logo"/>
            <p className="name">Lachelle Hubbard</p>
        </div>
        </div>
    );
}

export default Startplace
