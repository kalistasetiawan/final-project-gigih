import React, { useState } from "react";
import axios from "axios";

const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";

const ShowPlaylists = () => {
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
    <div className="outer">
  { data?.items ? data.items.map((item) => 
  <div className="box" key={item.id}>
    <a target="_blank" href={item.external_urls.spotify} rel="noopener noreferrer">
      <img src={item.images[0].url} alt="" width="200" height="200"/></a>
    <p><b>{item.name}</b></p>
  </div>) : null}
    </div>
    </>
  );
};

export default ShowPlaylists;