import GetPlaylist from '../../GetPlaylist';
import houseIcon from '../../img/house.svg';
import searchIcon from '../../img/search.svg';
import spotifyIcon from '../../img/spotify.svg';
import React from 'react';

function Sidebar() {
    return (
        <div className="left-nav">
            <img src={spotifyIcon} width="250" height="150" alt="spotify"/>
            <div className="left-navbar"><a href="/redirect">
                <img src={houseIcon} width="16" height="16" alt="house"/> &nbsp; Home</a></div>
            <div className="left-navbar"><a href="/search-track">
                <img src={searchIcon} width="16" height="16" alt="search"/> &nbsp; Search</a></div>

            <GetPlaylist />
        </div>
    )
}

export default Sidebar;