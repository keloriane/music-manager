import React, { useState, useEffect } from "react";
import SpotifyWabApi from "spotify-web-api-js";
import "./body.scss";
import Header from "./../Header/Header";
import Row from "../Row/Row";
import Card from "./../Row/Card";
import { useDataLayerValue } from "../../DataLayer";
import { Link } from "react-router-dom";

function Body() {
  const [{playlists, playlist}, dispatch] = useDataLayerValue();

  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const spotify = new SpotifyWabApi();
  const handleSearchTerms = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    spotify
      .searchArtists(search)
      .then((res) => {
        setResult(res.artists.items);
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="body">
        <div className="row">
            <Row />

        </div>
      <div className="playlist">
        <Link to={`/playlist/${playlist.id}`}>
          <Card
            key={playlist.id}
            name={playlist.name}
            url={
              Array.isArray(playlist.images) > 0 ? playlist.images[0].url : ""
            }
          />
        </Link>
             { 
                Array.isArray(playlists.items)?playlists.items.map((playlist)=>
                
                (
                <Link to={`/playlist/${playlist.id}`}>
                <Card
                  key={playlist.id}
                  name={playlist.name}
                  url={
                  Array.isArray(playlist.images) > 0 ? playlist.images[0].url : ""
                  }
                />
              </Link>
                
                ))
                :console.log(playlists)
            } 
      </div>
      <div className="search">
        <input type="search" value={search} onChange={handleSearchTerms} />
      </div>
      <div className="result-search">
        {/* {result > 0
          ? (result = [])
          : result.map((res) => (
              <Card
                key={res.id}
                name={res.name}
                url={Array.isArray(res.images) > 0 ? res.images[0].url : ""}
              />
            ))} */}
            {
              Array.isArray(result)?result.map((res)=>
              <Card
              key={res.id}
              name={res.name}
              url={Array.isArray(res.images) > 0 ? res.images[0].url : ""}
            />
              ):null
            }
      </div>
    </div>
  );
}

export default Body;
