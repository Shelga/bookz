import React from 'react';
import './ScrollX.css';


function ScrollX() {
    return (
        <div className="scrollX">
            <div className="square violetSquare">
                <div className="textInSquare">Your Release Radar</div>
            </div>
            <div className="square roseSquare">
                <div className="textInSquare">Top books of 2019</div>
            </div>
            <div className="square blueSquare">
                <div className="textInSquare">Amazon Bestsellers</div>
            </div>
            <div className="square orangeSquare">
                <div className="textInSquare">Other</div>
            </div>
        </div>

    );
}

export default ScrollX