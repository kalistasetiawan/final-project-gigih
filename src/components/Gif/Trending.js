// import gif from './gif';
// import gifs from './gifs';
import React, {useState} from 'react';
import axios from 'axios';

const Trending = () => {
    const[result, setResult] = useState([]);

        axios
        .get(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_CODE}&rating=g&limit=10`)
        .then(response => {
            console.log(response)
            setResult(response.data.data)
        })
    

    return (
        <div className="outer">
            {result.map(gif => (
                <div className="box" key={gif.id}>
                <img src={gif.images.original.url} title={gif.title} alt={gif.name} width="200" height="200" />
                </div>
            ))}
         </div>
    )
}

export default Trending;