import React, { Component } from 'react';

const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL
  } = process.env;
  
  const space_delimiter = "%20";
  
  const SCOPES = [
    "playlist-read-private",
    "playlist-modify-private",
    "user-read-private",
  ];
  
  const SCOPES_URL_PARAM = SCOPES.join(space_delimiter);

  export default class SpotifyAuthButton extends Component {
  render(){

      const hrefURI = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`

      return(
      <div className="wrap2">
        <h2>Music For Everyone</h2>
        <p>Sign in using your Spotify Account for music and playlist creation on your home device powered by the Spotify API.</p>
        <button type="button">
          <a className="SpotifyButton" href={hrefURI}>Login Now</a>
        </button>
      </div>
      )
  }
}
