import React from "react";

const BottomBar = () => {

    return (
        <div className="absolute bottom-0 bg-neutral-900 w-screen h-11 flex flex-row justify-between text-center items-center">
            <div className="mx-auto flex flex-row justify-center text-center items-center">
                <a className="p-4 bg-transparent text-white text-sm md:text-base hover:underline">About</a>
                <a className="p-4 bg-transparent text-white text-sm md:text-base hover:underline">Advertising</a>
                <a className="p-4 bg-transparent text-white text-sm md:text-base hover:underline">Business</a>
                <a className="p-4 bg-transparent text-white text-sm md:text-base hover:underline">How Search Works</a>
            </div>

            <div className="mx-auto flex flex-row justify-center text-center items-center">
                <a className="p-4 bg-transparent text-white text-sm md:text-base hover:underline">Privacy</a>
                <a className="p-4 bg-transparent text-white text-sm md:text-base hover:underline">Terms</a>
                <a className="p-4 bg-transparent text-white text-sm md:text-base hover:underline">Settings</a>
            </div>
        </div>

    );
};

export default BottomBar;
