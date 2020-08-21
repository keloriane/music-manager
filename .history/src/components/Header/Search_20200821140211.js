import React,{useState} from "react";
import SpotifyWabApi from "spotify-web-api-js";



function Search() {

    const [search, setSearch] = useState('')
    const spotify = new SpotifyWabApi()
    const handleSearchTerms = (e)=>{
        setSearch(e.target.value)
        spotify.searchTracks()
            .then((res)=>{
            console.log(res);
        })

    }

  return (
    <div>
      search
      <input type="text" value={search} onChange={handleSearchTerms}/>
    </div>
  );
}

export default Search;
