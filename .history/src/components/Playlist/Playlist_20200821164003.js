import React, { useEffect, useState } from 'react'
import SpotifyWabApi from "spotify-web-api-js";
import Card from './../Row/Card';



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
  },[])
  console.log(playlistTracks.items);
    return (
        <div>
            {
                Array.isArray(playlistTracks.items)?playlistTracks.items.map((song)=>(
                    <Card 
                        name={song.track.name}
                        url={song.track.album.images[1].url}
                    />

                )) :null

            }
            
        </div>
    )
}

export default Playlist
