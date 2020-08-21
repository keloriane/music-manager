import React from 'react'
import "./Row.scss";
import { useDataLayerValue } from '../../DataLayer';
import { Link } from 'react-router-dom';
function Row() {

    const [{recommendations}, dispatch] = useDataLayerValue()
    console.log("recommendations", recommendations)
    return (
        <div className="song-row">
            {recommendations?.items?.map((rec)=>(

                <Link className="card-song" to={`/artist/`}>
                    <img src={rec.track.album.images[1].url} alt=""/>
                    <h4>{rec.track.name}</h4>
                </Link>
            )
            )}
        </div>
    )
}

export default Row
