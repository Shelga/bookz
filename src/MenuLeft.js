import React from 'react';
import './MenuLeft.css';
import { ReactComponent as Menu } from './static/menu.svg'
import { ReactComponent as Search } from './static/search.svg'
import { ReactComponent as Whiteheart } from './static/whiteheart.svg'
import { ReactComponent as Menu1 } from './static/menu1.svg'
import { ReactComponent as User } from './static/user.svg'
import { ReactComponent as Star } from './static/star.svg'

function MenuLeft() {
    return (
        <div className="menuLeft">
            <h3 className="menuOne">DISCOVER</h3>
            <button className="text2">
                <Menu className="buttonIcon" />
                <p className="text">Home</p>
            </button>
            <button className="text2">
                <Search className="buttonIcon" />
                <p className="text">Browse</p>
            </button>
            <button className="text2">
                <Whiteheart className="buttonIcon" />
                <p className="text">For You</p>
            </button>
            <h3 className="menuOne">LIBRARY</h3>
            <button className="text2">
                <Menu1 className="buttonIcon" />
                <p className="text">Playlists</p>
            </button>
            <button className="text2">
                <User className="buttonIcon" />
                <p className="text">Authors</p>
            </button>
            <button className="text2">
                <Star className="buttonIcon" />
                <p className="text">Favourites</p>
            </button>
        </div>
    );
}

export default MenuLeft;