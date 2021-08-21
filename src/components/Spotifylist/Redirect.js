import React, { useEffect } from 'react';
import Sidebar from './navbar/sidebar';
import Nav from './navbar/nav';
import ShowPlaylist from './ShowPlaylist';

const getReturnedParamsFromSpotifyAuth = (hash) => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split("&");
  const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
    const [key, value] = currentValue.split("=");
    accumulater[key] = value;
    return accumulater;
  }, {});

  return paramsSplitUp;
};  

const Redirect = () => {

  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } =
        getReturnedParamsFromSpotifyAuth(window.location.hash);

      localStorage.clear();

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);
    }
  });
  
      return (
        <>
        <Sidebar />
        <Nav />
        <div className="wrap">
          <div className="wrap3">
            <h2>Spotilist</h2>
            <p>Spotilist is a webpage that provide Kalista Playlists.</p>
            <ShowPlaylist />
          </div>     
        </div> 
        </>       
      );
    };

export default Redirect;