import React, { useEffect, useState } from 'react'
import SpotifyWabApi from "spotify-web-api-js";



function Playlist() {
    const [playlistTracks, setPlaylistTracks] = useState([]);
  let url = window.location.pathname.split("/");
  let id = url[2];
  const spotify = new SpotifyWabApi();

  useEffect(()=>{
      spotify.getPlaylistTracks(id)
        .then((res)=>{
            setPlaylistTracks(res)
        })
  })
    return (
        <div>
            <h2>Playlist</h2>
        </div>
    )
}

export default Playlist
