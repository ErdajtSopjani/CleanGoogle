import React from "react";

const BottomBar = () => {

    return (
        <div className="absolute bottom-0 bg-neutral-900 w-screen h-11 flex flex-row justify-between text-center items-center">
            <div className="mx-auto flex flex-row justify-center text-center items-center">
                <a className="p-4 bg-transparent text-white text-xs md:text-base hover:underline" href="https://github.com/ErdajtSopjani/CleanGoogle">About</a>
                <a className="p-4 bg-transparent text-white text-xs md:text-base hover:underline" href="https://ads.google.com/intl/en_zz/home/">Advertising</a>
                <a className="p-4 bg-transparent text-white text-xs md:text-base hover:underline" href="https://www.google.com/services/">Business</a>
                <a className="p-4 bg-transparent text-white text-xs md:text-base hover:underline" href="https://github.com/ErdajtSopjani/CleanGoogle/blob/main/README.md">How Search Works</a>
            </div>

            <div className="mx-auto flex flex-row justify-center text-center items-center">
                <a className="p-4 bg-transparent text-white text-xs md:text-base hover:underline" href="https://policies.google.com/privacy">Privacy</a>
                <a className="p-4 bg-transparent text-white text-xs md:text-base hover:underline" href="https://policies.google.com/terms">Terms</a>
                <a className="p-4 bg-transparent text-white text-xs md:text-base hover:underline" href="https://github.com/ErdajtSopjani/CleanGoogle">Settings</a>
            </div>
        </div>

    );
};

export default BottomBar;
