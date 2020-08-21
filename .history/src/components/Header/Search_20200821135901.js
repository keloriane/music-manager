import React,{useState} from "react";


function Search() {

    const [search, setSearch] = useState('')
    const handleSearchTerms = (e)=>{
        setSearch(e.target.value)
    }
  return (
    <div>
      search
      <input type="text" value={search} onChange={handleSearchTerms}/>
    </div>
  );
}

export default Search;
