import React from 'react';
import {Link} from "react-router-dom"

function Card(props) {
    return (
        <div className="song-card">
       
                    <img src={props.url} alt=""/>
         
        </div>
    )
}

export default Card
