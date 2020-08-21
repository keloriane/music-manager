import React from 'react'
import "./Row.scss";
import { useDataLayerValue } from '../../DataLayer';
import Card from "./Card";
function Row() {

    const [{recommendations}, dispatch] = useDataLayerValue()
    console.log("recommendations", recommendations)
    return (
        <div className="song-row">
            {recommendations?.items?.map((rec)=>(
                

                <Card 
                    id={rec.track.artists[0].id}
                    url={rec.track.album.images[1].url}
                    name={rec.track.name}
                    />
            )
            )}
        </div>
    )
}

export default Row
