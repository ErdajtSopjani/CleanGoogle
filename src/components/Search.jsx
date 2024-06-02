import React, { useState } from "react";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        console.log(searchQuery)
        window.open(`https://www.google.com/search?q=${searchQuery}&udm=14`);
    };

    return (
        <form className="flex flex-col items-center w-screen" onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
        }}>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-gray-800 6 p-2 rounded-full w-2/3"
                placeholder=""
            />
            <div className="mt-4 space-x-4">
                <button type="submit" className="bg-neutral-700/50 text-white px-6 py-2 rounded-md">
                    Google Search
                </button>
                <button type="button" className="bg-neutral-700/50 text-white px-6 py-2 rounded-md" onClick={handleSearch}>
                    I'm Feeling Lucky
                </button>
            </div>
        </form>

    );
};

export default Search;
