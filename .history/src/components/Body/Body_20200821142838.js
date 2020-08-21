import React,{useState, useEffect} from "react";
import SpotifyWabApi from "spotify-web-api-js";
import './body.scss'
import Header from "./../Header/Header";
import Row from "../Row/Row";
import Card from "./../Row/Card";

function Body() {
    const [search, setSearch] = useState('')
    const [result, setResult] = useState('')
    const spotify = new SpotifyWabApi()
    const handleSearchTerms = (e)=>{
        e.preventDefault()
        setSearch(e.target.value)
    }
    const performSearch = (e) => {
        e.preventDefault()
        spotify.searchTracks(search)
            .then((res)=>{
            setResult(res.tracks.items);

        })
        
    }
  return (
    <div className="body">
      <div className="search">
        <form action="" onSubmit={performSearch}>
          <input type="text" value={search} onChange={handleSearchTerms} />
        </form>
      </div>
      <div className="result-search"></div>
    </div>
  );
}

export default Body;
