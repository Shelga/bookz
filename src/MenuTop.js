import React from 'react';
import './MenuTop.css';
import img3 from './static/search.svg'
import img4 from './static/heart.svg'

function MenuTop () {
    return (
<div className="menutop">
    <div>
        <h3>DISCOVER</h3>
        <div className="menuOne">
            <div className="text2">
                <img className="img2"></img>
                <p className="text">Home</p>
            </div>
            <img className="img3" src={img3}></img>
            <p className="text">Browse</p>
            <img className="img4" src={img4}></img>
            <p className="text">For You</p>
        </div>
    </div>
    <div>
        <h3>LIBRARY</h3>
        <img className="img5"></img>
        <p className="text">Plailists</p>
        <img className="img6"></img>
        <p className="text">Authors</p>
        <img className="img7"></img>
        <p className="text">Favourites</p>
    </div>
</div>

    );
}

export default MenuTop;