import React, {useEffect,useState} from 'react'
import SpotifyWabApi from "spotify-web-api-js";


function Artist() {
    const spotify = new SpotifyWabApi();
    const [artist, setArtist] = useState([]);
    let url = window.location.pathname.split('/');
    let id = url[2]

    useEffect(async ()=>{
        await spotify.getArtist(id)
        .then((res)=>{
            console.log('Artist',res)
            setArtist(res)
        })

    },[])


    return (
        <div className="artist">
            <h3>
                {artist.name}
            </h3>
            <img src={artist.images[0].uri} alt=""/>
        </div>
    )
}

export default Artist
