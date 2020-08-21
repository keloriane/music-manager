import React, {useEffect,useState} from 'react'
import SpotifyWabApi from "spotify-web-api-js";
import Card from "./../../Card/Card"




function Artist() {

    const spotify = new SpotifyWabApi();
    const [artist, setArtist] = useState([]);
    let url = window.location.pathname.split('/');
    let id = url[2]

    useEffect(()=>{
        spotify.getArtist(id)
        .then((res)=>{
            console.log('Artist',res)
            setArtist(res)
        })
        spotify.getArtistAlbums(id)
        .then((res)=>{
            console.log('Albums',res)
           
        })
        spotify.getArtistTopTracks(id, "BE")
        .then((res)=>{
            console.log('TOP_TRACKS',res)
           
        })
    },[])

    

    return (
        <div className="artist">
            <h3>
                {artist.name}
            </h3>
            <img src={Array.isArray(artist.images) >0 ? artist.images[0].url : ''} alt=""/> 

        </div>
    )
}

export default Artist
