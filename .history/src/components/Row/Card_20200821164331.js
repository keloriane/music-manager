import React from 'react';
import {Link} from "react-router-dom"

function Card(props) {
    return (
        <div className="song-card">
       
                    <img src={props.url} alt=""/>
                    <h4>{props.name}</h4>
                
        </div>
    )
}

export default Card
