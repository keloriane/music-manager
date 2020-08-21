import React from 'react';
import {Link} from "react-router-dom"

function Card(props) {
    return (
        <div>
            <Link className="card-song" to={`/artist/${props.id}`}>
                    <img src={props.url} alt=""/>
                    <h4>{props.name}</h4>
                </Link>
        </div>
    )
}

export default Card
