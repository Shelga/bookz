import React from 'react';
import './ScrollY.css';


function ScrollY() {
    return (
        <div className="scrollY">
            <h1>Daily top 100</h1>
            <div className="booksContainer">
                <div className="squareBook">
                    <div className="cover greenSquare"></div>
                    <div className="info">
                        <div className="assessment">4.8</div>
                        <div className="nameBook">The Water Cure</div>
                        <div className="author">Joanne Ramos</div>
                        <button className="category">Biography</button>
                    </div>

                </div>
                <div className="squareBook">
                    <div className="cover yellowSquare"></div>
                    <div className="info">
                        <div className="assessment">5.0</div>
                        <div className="nameBook">Karate Chop</div>
                        <div className="author">Dorthe Nors</div>
                        <button className="category">Biography</button>
                    </div>

                </div>
                <div className="squareBook">
                    <div className="cover pinkSquare"></div>
                    <div className="info">
                        <div className="assessment">5.0</div>
                        <div className="nameBook">Severance</div>
                        <div className="author">Ling Ma</div>
                        <button className="category">Advantures</button>
                    </div>

                </div>
                <div className="squareBook">
                    <div className="cover transperentSquare"></div>
                    <div className="info">
                        <div className="assessment">4.8</div>
                        <div className="nameBook">Territory of light</div>
                        <div className="author">Yuko Tsushima</div>
                        <button className="category">Biography</button>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default ScrollY