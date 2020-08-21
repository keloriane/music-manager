import React from 'react'
import "./Row.scss";
import { useDataLayerValue } from '../../DataLayer';
function Row() {

    const [{recommendations}, dispatch] = useDataLayerValue()
    console.log("recommendations", recommendations)
    return (
        <div className="song-row">
            {recommendations?.items?.map((rec)=>(

                <div className="card-song">
                    <img src={rec.track.album.images[1].url} alt=""/>
                    <h4>{rec.track.name}</h4>
                </div>
            )
            )}
        </div>
    )
}

export default Row
