import React from 'react'

function Card() {
    return (
        <div>
            <Link className="card-song" to={`/artist/${rec.track.artists[0].id}`}>
                    <img src={props.url} alt=""/>
                    <h4>{props.name}</h4>
                </Link>
        </div>
    )
}

export default Card
