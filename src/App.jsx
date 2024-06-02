import React, { useState } from 'react';
import Search from "./components/Search";

import logo from './assets/cleangoogle-logoclean.png';

function App() {

    return (
        <div className="flex flex-col items-center justify-center bg-slate-950/20 w-screen h-screen">
            <h1 className="text-4xl font-bold text-white relative top-0">Clean Google</h1>
            <Search />
        </div>
    );
}

export default App;
