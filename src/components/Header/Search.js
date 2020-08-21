import React,{useState} from "react";
import SpotifyWabApi from "spotify-web-api-js";



function Search() {

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
    <div>
      <form action="" onSubmit={performSearch}>

      <input type="text" value={search} onChange={handleSearchTerms}/>
      </form>
    </div>
  );
}

export default Search;
