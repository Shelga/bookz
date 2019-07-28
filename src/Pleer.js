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
                    <div className="">
                        <div className="nameBook">The Water Cure</div>
                        <div className="author">Joanne Ramos</div>
                    </div>
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
                        <div>Chapter 01</div>
                        <div></div>
                    </div>
                    <div className="chapter">
                        <PauseButton className="blackPleerIcon" />
                        <div>Chapter 02</div>
                        <div></div>
                    </div>
                    <div className="chapter">
                        <PlayButton className="blackPleerIcon" />
                        <div>Chapter 03</div>
                        <div></div>
                    </div>
                    <div>
                        <PlayButton className="blackPleerIcon" />
                        <div>Chapter 04</div>
                        <div></div>
                    </div>
                    <div>
                        <PlayButton className="blackPleerIcon" />
                        <div>Chapter 05</div>
                        <div></div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pleer