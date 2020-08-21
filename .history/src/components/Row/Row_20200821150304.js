import React from "react";
import "./Row.scss";
import { useDataLayerValue } from "../../DataLayer";
import Card from "./Card";
import {Link} from "react-router-dom";
function Row() {
  const [{ recommendations }, dispatch] = useDataLayerValue();
  console.log("recommendations", recommendations);
  return (
    <div className="song-row">
      {recommendations?.items?.map((rec) => (
        <Link to={`/artist/${rec.track.artists[0].id}`}>
          <Card
        
            url={rec.track.album.images[1].url}
            name={rec.track.name}
          />
        </Link>
      ))}
    </div>
  );
}

export default Row;
