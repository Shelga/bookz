import React from 'react';
import './Pleer.css';
import { ReactComponent as Next } from './static/next.svg'
import { ReactComponent as Pause } from './static/pause.svg'
import { ReactComponent as Previous } from './static/previous.svg'
import { ReactComponent as PauseButton } from './static/pauseButton.svg'
import { ReactComponent as PlayButton } from './static/playButton.svg'

function Pleer() {
    return (
        <div className='pleer'>
            <div className="pleerWhite">
                <div className="infoBook">
                    <div className="coverBook"></div>
                    <span className="aboutbook">
                        <p className="nameBookPleer">The Water Cure</p>
                        <p className="authorPleer">Joanne Ramos</p>
                    </span>
                </div>
                <div className="pleerMenu">
                    <div className="timePast">5:50</div>
                    <div className="booksPlayer">
                        <Previous className="pleerIcon" />
                        <Pause className="pleerIcon" />
                        <Next className="pleerIcon" />
                    </div>
                    <div className="timeFuture">5:25</div>
                </div>
                <div className="pleerBlack">
                    <div className="chapter">
                        <PlayButton className="blackPleerIcon"/>
                        <p>Chapter 01</p>
                        <p>2:30</p>
                    </div>
                    <div className="chapter">
                        <PauseButton className="blackPleerIcon" />
                        <p>Chapter 02</p>
                        <p>5:50</p>
                    </div>
                    <div className="chapter">
                        <PlayButton className="blackPleerIcon" />
                        <p>Chapter 03</p>
                        <p>10:33</p>
                    </div>
                    <div className="chapter">
                        <PlayButton className="blackPleerIcon" />
                        <p>Chapter 04</p>
                        <p>15:25</p>
                    </div>
                    <div className="chapter">
                        <PlayButton className="blackPleerIcon" />
                        <p>Chapter 05</p>
                        <p>18:15</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pleer