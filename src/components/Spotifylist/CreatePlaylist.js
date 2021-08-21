import React, { useEffect, useState } from "react";
import axios from "axios";

const PROFILE_ENDPOINT = "https://api.spotify.com/v1/me";

const CreatePlaylists = () => {

  const [token, setToken] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const uri = "spotify:track:0pYacDCZuRhcrwGUA5nTBe,spotify:track:71WZ7yFuwxmQz5jJUpvkGv,spotify:track:4cK8aSO2Ec4gmIjhtHfAKd";

  const handleTitle = (event) => {
    setTitle(event.target.value)
}

  const handleDesc = (event) => {
  setDesc(event.target.value)
}
//   const userID = useState('');

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const GetProfile = () => {
    axios
      .get(PROFILE_ENDPOINT, {
        headers: {
            Authorization: "Bearer " + token,
        },
      })
      .then(response => {
        // console.log(response.data.id);
        axios("https://api.spotify.com/v1/users/"+response.data.id+"/playlists", {
          method: 'POST',
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json"
          },
            data: {
              name: title,
              description: desc,
              public: false
            }
          })
          .then(response => {
            // setList(response);
            // console.log(response);
            axios(`https://api.spotify.com/v1/playlists/`+response.data.id+`/tracks?uris=${encodeURIComponent(uri)}`, {
            method: 'POST',
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json"
            },            
            })
            .then((response) => {
              // setList(response);
              console.log(response);
              
            })
            .catch((error) => {
              console.log(error);
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
        <h2>Create Playlist</h2>
        <input type="text" placeholder="Title" onChange={handleTitle}/>
        <input type="text" placeholder="Description" id="desc" onChange={handleDesc} />
        <button onClick={GetProfile}>Submit</button>
    </>
  );
};

export default CreatePlaylists;