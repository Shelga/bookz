import React from 'react';
import './MenuTop.css';
import img2 from './static/menu.svg'
import img3 from './static/search.svg'
import img4 from './static/whiteheart.svg'
import img5 from './static/menu1.svg'
import img6 from './static/user.svg'
import img7 from './static/star.svg'

function MenuTop() {
    return (
        <div className="menutop">
            <div>
                <h3 className="menuOne">DISCOVER</h3>
                <div>
                    <div className="text2">
                        <img className="img2" src={img2}></img>
                        <div className="text">Home</div>
                    </div>
                    <div className="text2">
                        <img className="img2" src={img3}></img>
                        <div className="text">Browse</div>
                    </div>
                    <div className="text2 borderForYou">
                        <img className="img2" src={img4}></img>
                        <div className="text">For You</div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="menuOne">LIBRARY</h3>
                <div className="text2">
                    <img className="img2" src={img5}></img>
                    <div className="text">Playlists</div>
                </div>
                <div className="text2">
                    <img className="img2" src={img6}></img>
                    <div className="text">Authors</div>
                </div>
                <div className="text2">
                    <img className="img2" src={img7}></img>
                    <div className="text">Favourites</div>
                </div>
            </div>
        </div>

    );
}

export default MenuTop;