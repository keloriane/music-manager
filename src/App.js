import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import { getTokenFromUrl } from "./spotify";
import './App.css';
import SpotifyWabApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useDataLayer } from "./DataLayer";
function App() {

  const spotify = new SpotifyWabApi();

  const [{ user , token }, dispatch] = useDataLayer();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;



    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      spotify.setAccessToken(_token);

      spotify.getMe()
      .then((user) => {
        dispatch({
          type: "SET_USER",
          user: user
        })
      })
    }
  
  }, []);

  

  return (
    <div className="App">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (

            <Login />
          )
      }
    </div>
  )
}
export default App;
