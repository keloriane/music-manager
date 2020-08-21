import React, { useState } from "react";
import SpotifyWabApi from "spotify-web-api-js";

function Album() {
  const [albumTracks, setAlbumTracks] = useState([]);
  let url = window.location.pathname.split("/");
  let id = url[2];
  const spotify = new SpotifyWabApi();
  spotify.getAlbumTracks(id).then((res) => {
    setAlbumTracks(res);
  });

  console.log(albumTracks);
  return (
    <div>
      <h2>Album</h2>
    </div>
  );
}

export default Album;
