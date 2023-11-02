import React, { useState } from "react";

const SearchBar = ({onSearch}) => {
    const [searchText, setSearchText] = useState("");
    
    const handleSearch = () => {
        onSearch=(searchText);
        setSearchText("");
    };

    return(
        <div className="search-bar">
            <input type="text" 
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search movie here..." >
            </input>
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};


export default SearchBar;