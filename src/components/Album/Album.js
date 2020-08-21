import React, { useEffect, useState } from "react";
import SpotifyWabApi from "spotify-web-api-js";
import Card from "./../Row/Card";

function Album() {
  const [albumTracks, setAlbumTracks] = useState([]);
  let url = window.location.pathname.split("/");
  let id = url[2];
  const spotify = new SpotifyWabApi();
  useEffect(() => {
    spotify.getAlbumTracks(id, "BE").then((res) => {
      setAlbumTracks(res.items);
    });
  }, []);
  return (
    <div>
      <h2>Album</h2>
      {albumTracks.map((track) => (
        <Card name={track.name} />
      ))}
    </div>
  );
}

export default Album;
