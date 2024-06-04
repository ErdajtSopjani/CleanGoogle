import React from "react";
import ProfilePicture from "../../assets/pfp.jpg";

const TopBar = ({ setImageSearch, imageSearch }) => {

    return (
        <div className="absolute top-0 right-10 flex flex-row">
            <a className={`${imageSearch && "hidden"} p-4 bg-transparent text-white text-xs md:text-sm hover:underline`} href="https://mail.google.com/mail/u/0/?ogbl">Gmail</a>
            <button className="p-4 bg-transparent text-white text-xs md:text-sm hover:underline" onClick={() => setImageSearch(true)}>Images</button>
            <a href="https://github.com/ErdajtSopjani"><img src={ProfilePicture} alt="Profile Picture" className="w-8 h-8 rounded-full mt-2" /></a>
        </div>
    );
};

export default TopBar;
