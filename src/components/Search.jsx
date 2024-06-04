import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({ imageSearch, openNewWindow }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        let openUrl = imageSearch ? `https://www.google.com/search?q=${searchQuery}&sclient=img&udm=2` : `https://www.google.com/search?q=${searchQuery}&udm=14`
        console.log(searchQuery);
        if (openNewWindow) window.open(openUrl);
        else window.location.href = openUrl;
    };

    return (
        <form className="absolute top-24 md:top-24 flex flex-col items-center w-screen" onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
        }}>
            <h1 className="items-center flex flex-row md:flex-row text-5xl md:text-7xl font-bold text-violet-400 pb-10">
                Clean
                <h1>
                    <span className="text-blue-500">G</span>
                    <span className="text-red-500">o</span>
                    <span className="text-yellow-500">o</span>
                    <span className="text-blue-500">g</span>
                    <span className="text-green-500">l</span>
                    <span className="text-red-500">e</span>
                </h1>
                <span className={`${!imageSearch && "hidden"} text-2xl text-blue-400 text-right pb-10`}>Images</span>
            </h1>
            <p className={`${imageSearch && "hidden"} text-[10px] md:text-sm pt-2 text-gray-300`}>Google Search, but with no AI junk :)</p>

            <div className="relative md:h-12 w-10/12 md:w-2/3 lg:w-1/2">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border border-gray-500 bg-transparent md:h-12 pl-10 py-0.5 md:py-2 rounded-full w-full"
                    placeholder=""
                />
                <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="mt-4 space-x-4">
                <button type="submit" className={`${imageSearch && "hidden"} bg-neutral-700/50 text-white px-4 py-1 md:px-6 md:py-2 text-[10px] md:text-sm rounded-md`}>
                    Google Search
                </button>
                <button type="button" className={`${imageSearch && "hidden"} bg-neutral-700/50 text-white px-4 py-1 md:px-6 md:py-2 text-[10px] md:text-sm rounded-md`} onClick={handleSearch}>
                    I'm Feeling Lucky
                </button>
            </div>
        </form>
    );
};

export default Search;
