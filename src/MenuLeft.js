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
            <div className="text2">
                <Menu className="buttonIcon" />
                <div className="text">Home</div>
            </div>
            <div className="text2">
                <Search className="buttonIcon" />
                <div className="text">Browse</div>
            </div>
            <div className="text2">
                <Whiteheart className="buttonIcon" />
                <div className="text">For You</div>
            </div>
            <h3 className="menuOne">LIBRARY</h3>
            <div className="text2">
                <Menu1 className="buttonIcon" />
                <div className="text">Playlists</div>
            </div>
            <div className="text2">
                <User className="buttonIcon" />
                <div className="text">Authors</div>
            </div>
            <div className="text2">
                <Star className="buttonIcon" />
                <div className="text">Favourites</div>
            </div>
        </div>
    );
}

export default MenuLeft;