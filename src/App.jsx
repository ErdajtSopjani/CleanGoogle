import React from 'react';
import Search from "./components/Search";
import TopBar from "./components/Bars/TopBar";
import BottomBar from "./components/Bars/BottomBar";
// import logo from './assets/cleangoogle-logoclean.png';

function App() {

    return (
        <div className="flex flex-col items-center justify-center bg-slate-950/15 w-screen h-screen overflow-hidden">
            <TopBar />
            <Search />
            <BottomBar />
        </div>
    );
}

export default App;
