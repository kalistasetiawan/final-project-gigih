import React, { useState } from "react";
import axios from "axios";

const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";

const GetPlaylists = () => {
  const [data, setData] = useState({});
  const token = localStorage.getItem("accessToken");

    axios
      .get(PLAYLISTS_ENDPOINT, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  return (
    <>
    <div className="left-nav">
    <h1>Playlist</h1>
      { data?.items ? data.items.map((item) => <div className="left-navbar" key={item.id}><a href={item.external_urls.spotify}>{item.name}</a></div>) : null}
    </div>
    </>
  );
};

export default GetPlaylists;