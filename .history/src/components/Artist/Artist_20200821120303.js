import React, {useEffect} from 'react'
import SpotifyWabApi from "spotify-web-api-js";


function Artist() {
    const spotify = new SpotifyWabApi();
    let url = window.location.pathname.split('/');
    let id = url[2]

    useEffect(async ()=>{
        await spotify.getArtist(id)
        .then((res)=>{
            console.log(res)
        })

    },[])
    
    console.log(id)

    return (
        <div className="artist">
            
        </div>
    )
}

export default Artist
