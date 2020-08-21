import React from 'react';
import Sidebar from "./Sidebar/Sidebar.js";
import Footer from './Footer/Footer.js';
import Body from './Body/Body.js';
import Row from './Row/Row.js';

const Player = ({spotify}) => {
    return (
        <div className="main-player">
           
           <div id="side-bar">

           
           </div>
        
            <div className="main-content">
            <Body spotify={spotify} />
            <Footer />
            </div>
        </div>
    )
}
export default Player