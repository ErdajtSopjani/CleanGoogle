import React, { useState } from 'react';
import Search from "./components/Search";
import BottomBar from "./components/BottomBar";

import logo from './assets/cleangoogle-logoclean.png';

function App() {

    return (
        <div className="flex flex-col items-center justify-center bg-slate-950/20 w-screen h-screen">
            <Search />
            <BottomBar />
        </div>
    );
}

export default App;
