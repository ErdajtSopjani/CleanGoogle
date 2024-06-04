import React, { useState } from 'react';
import Search from "./components/Search";
import TopBar from "./components/Bars/TopBar";
import BottomBar from "./components/Bars/BottomBar";
// import logo from './assets/cleangoogle-logoclean.png';

function App() {
    const [imageSearch, setImageSearch] = useState(false);

    return (
        <div className={`flex flex-col items-center justify-center ${imageSearch ? "bg-slate-800/15" : "bg-slate-950/15"} w-screen h-screen overflow-hidden`}>
            <TopBar imageSearch={imageSearch} setImageSearch={setImageSearch} />
            <Search imageSearch={imageSearch} />
            <BottomBar />
        </div>
    );
}

export default App;
