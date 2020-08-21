import React, { useEffect } from "react";
import Login from "./components/Login";
import { getTokenFromUrl } from "./spotify";
import "./App.scss";
import SpotifyWabApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useDataLayerValue } from "./DataLayer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Artist from "./components/Artist/Artist";
import Album from "./components/Album/Album";
import Playlist from "./components/Playlist/Playlist";
import Header from "./components/Header/Header";
function App() {
  const spotify = new SpotifyWabApi();

  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });

        console.log(user);
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
        console.log(playlists)
      });
      spotify.getMyCurrentPlayingTrack().then((playing) => {
        dispatch({
          type: "SET_PLAYING",
          playing: playing,
        });
      });
      spotify.getPlaylist("37i9dQZEVXcEyb7W9u7IyD").then((playlist) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlist: playlist,
        });
      });
      spotify.getMyRecentlyPlayedTracks().then((recommendations) => {
        dispatch({
          type: "SET_RECOMMENDATIONS",
          recommendations: recommendations,
        });
        console.log("RECOMMENDATIONS/", recommendations);
      });
      spotify.getArtist().then((artist) => {
        dispatch({
          type: "SET_ARTIST",
          artist: artist,
        });
      });
      
    }
  }, []);

  return (
    <Router basename="/">
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            {token ? <Player spotify={spotify} /> : <Login />}
          </Route>
          <Route exact path="/artist/:id">
            <Artist />
          </Route>
          <Route exact path="/album/:id">
            <Album />
          </Route>
          <Route exact path="/playlist/:id">
            <Playlist />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
