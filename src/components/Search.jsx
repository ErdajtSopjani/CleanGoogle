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
        <form className="absolute top-24 md:top-24 flex flex-col items-center w-screen" onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
        }}>
            <h1 className="items-center flex flex-row md:flex-row text-5xl md:text-7xl font-bold text-violet-400 pb-10">
                Clean
                <h1>
                    <span class="text-blue-500">G</span>
                    <span class="text-red-500">o</span>
                    <span class="text-yellow-500">o</span>
                    <span class="text-blue-500">g</span>
                    <span class="text-green-500">l</span>
                    <span class="text-red-500">e</span>
                </h1>
            </h1>
            <p className="text-[10px] md:text-sm pt-2 text-gray-300">Google Search, but with no AI junk :)</p>

            <div className="relative md:h-12 w-10/12 md:w-2/3 lg:w-1/2">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border border-gray-500 bg-transparent md:h-12 pl-10 p-0.5 md:p-2 rounded-full w-full"
                    placeholder=""
                />
                <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="mt-4 space-x-4">
                <button type="submit" className="bg-neutral-700/50 text-white px-4 py-1 md:px-6 md:py-2 text-[10px] md:text-sm rounded-md">
                    Google Search
                </button>
                <button type="button" className="bg-neutral-700/50 text-white px-4 py-1 md:px-6 md:py-2 text-[10px] md:text-sm rounded-md" onClick={handleSearch}>
                    I'm Feeling Lucky
                </button>
            </div>
        </form>
    );
};

export default Search;
