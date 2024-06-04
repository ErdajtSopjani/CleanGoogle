import React from "react";
import ProfilePicture from "../../assets/pfp.jpg";

const TopBar = ({ setImageSearch, imageSearch, setOpenNewWindow, openNewWindow }) => {

    return (
        <div className="absolute top-0 right-10 flex flex-row">
            <label className="p-4 inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" onClick={() => setOpenNewWindow(!openNewWindow)} />
                <div className="relative w-11 h-6 peer-focus:outline-none rounded-full bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-xs font-bold text-gray-300">Open in new window</span>
            </label>
            <a className={`${imageSearch && "hidden"} p-4 bg-transparent text-white text-xs md:text-sm hover:underline`} href="https://mail.google.com/mail/u/0/?ogbl">Gmail</a>
            <button className="p-4 bg-transparent text-white text-xs md:text-sm hover:underline" onClick={() => setImageSearch(!imageSearch)}>Images</button>
            <a href="https://github.com/ErdajtSopjani"><img src={ProfilePicture} alt="Profile Picture" className="w-8 h-8 rounded-full mt-2" /></a>
        </div>
    );
};

export default TopBar;
