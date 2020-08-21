import React,{useState, useEffect} from "react";
import SpotifyWabApi from "spotify-web-api-js";



function Search() {

    const [search, setSearch] = useState('')
    const spotify = new SpotifyWabApi()
    const handleSearchTerms = (e)=>{
        setSearch(e.target.value)
        console.log(search);
        
        
    }
    const performSearch =( ) => {
        spotify.searchTracks(search)
        .then((res)=>{
        console.log(res.tracks.items);
    })
    }
    useEffect(() => {
        
       
    }, [])
  return (
    <div>
      search
      <form onSubmit={performSearch}>
      <input type="text" value={search} onChange={handleSearchTerms}/>
      </form>
      
    </div>
  );
}

export default Search;
