import React,{useState} from "react";
import SpotifyWabApi from "spotify-web-api-js";



function Search() {

    const [search, setSearch] = useState('')
    const spotify = new SpotifyWabApi()
    const handleSearchTerms = (e)=>{
        setSearch(e.target.value)
        console.log(search);
        
        
    }
    useEffect(() => {
        
        spotify.searchTracks()
            .then((res)=>{
            console.log(res.tracks.items);
        })
    }, [])
  return (
    <div>
      search
      <input type="text" value={search} onChange={handleSearchTerms}/>
    </div>
  );
}

export default Search;
