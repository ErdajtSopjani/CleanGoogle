import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        console.log(searchQuery);
        window.open(`https://www.google.com/search?q=${searchQuery}&udm=14`);
    };

    return (
        <form className="absolute top-60 flex flex-col items-center w-screen" onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
        }}>
            <h1 className="text-7xl md:text-7xl font-bold text-white pb-10">CleanGoogle</h1>
            <p className="pt-2 text-gray-300">Google Search, but with no AI junk :0</p>

            <div className="relative h-12 w-screen md:w-2/3 lg:w-1/2 xl:w-1/3">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border border-gray-500 bg-transparent h-12 pl-10 p-2 rounded-full w-full"
                    placeholder=""
                />
                <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
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
