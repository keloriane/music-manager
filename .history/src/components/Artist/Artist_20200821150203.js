import React, { useEffect, useState } from "react";
import SpotifyWabApi from "spotify-web-api-js";
import Card from "./../Row/Card";
import { Link } from "react-router-dom";

function Artist() {
  const spotify = new SpotifyWabApi();
  const [artist, setArtist] = useState([]);
  const [artistTracks, setArtistTracks] = useState([]);
  const [artistAlbums, setArtistAlbums] = useState([]);

  let url = window.location.pathname.split("/");
  let id = url[2];

  useEffect(() => {
    spotify.getArtist(id).then((res) => {
      console.log("Artist", res);
      setArtist(res);
    });
    spotify.getArtistAlbums(id).then((res) => {
      console.log("Albums", res);
      setArtistAlbums(res);
    });
    spotify.getArtistTopTracks(id, "BE").then((res) => {
      setArtistTracks(res.tracks);
    });
  }, []);

  console.log("tracks", artistTracks);

  return (
    <div className="artist">
      <h3>{artist.name}</h3>
      <img
        src={Array.isArray(artist.images) > 0 ? artist.images[0].url : ""}
        alt=""
      />
      <div className="top-tracks">
        {artistTracks.map((track) => (
          <Link to={`/album/${track.album.id}`}>
            <Card name={track.name} url={track.album.images[1].url} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Artist;
