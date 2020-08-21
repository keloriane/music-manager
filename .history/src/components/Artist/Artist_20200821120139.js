import React from 'react'
import SpotifyWabApi from "spotify-web-api-js";


function Artist() {
    const spotify = new SpotifyWabApi();
    let url = window.location.pathname.split('/');
    let id = url[2]

    console.log(id)

    return (
        <div className="artist">
            
        </div>
    )
}

export default Artist
