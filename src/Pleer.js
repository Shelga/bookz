import React from 'react';
import './Pleer.css';
import { ReactComponent as Next } from './static/next.svg'
import { ReactComponent as Pause } from './static/pause.svg'
import { ReactComponent as Previous } from './static/previous.svg'


function Pleer() {
    return (
        <div className='pleer'>
            <div className="pleerWhite">
                <div className="infoBook">
                    <div className="coverBook"></div>
                    <div className="">
                        <div className="nameBook">The Water Cure</div>
                        <div className="author">Joanne Ramos</div>
                    </div>
                </div>
                <div className="pleerMenu">
                    <div>5:50</div>
                    <div className="booksPlayer">
                        <Previous className="pleerIcon" />
                        <Pause className="pleerIcon" />
                        <Next className="pleerIcon" />
                    </div>
                    <div>5:25</div>
                </div>
                <div className="pleerBlack">
                </div>

            </div>
        </div>
    );
}

export default Pleer