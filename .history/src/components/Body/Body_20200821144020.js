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
        spotify.searchTracks(search)
            .then((res)=>{
            setResult(res.tracks.items);
            console.log(result);
    
        })
    }
  
  return (
    <div className="body">
      <div className="search">
       
          <input type="search" value={search} onChange={handleSearchTerms} />
       
      </div>
      <div className="result-search">
          {
              result > 0 ? result = [] : result.map((res)=>(
                <p>{res.name}</p>
              ))
          }
      </div>
    </div>
  );
}

export default Body;
