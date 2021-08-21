// import gif from './gif';
// import gifs from './gifs';
import React, {useState} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const SearchComponent = () => {
    const[search, setSearch] = useState('')
    const[result, setResult] = useState([]);

    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },
      }));
    
      const classes = useStyles();

    const getText = () => {
        axios
        .get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_CODE}&q=${search}&limit=9`)
        .then(response => {
            console.log(response)
            setResult(response.data.data)
        })
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            <input type="text" id="search_bar" onChange={handleSearch} />
            <Button onClick={getText} variant="contained" color="primary" className={classes.button}>Search</Button><br></br>
            <div className="outer">
            {result.map(gif => (
                <div className="box" key={gif.id}>
                <img src={gif.images.original.url} title={gif.title} alt={gif.name} width="200" height="200" />
                </div>
            ))}
            </div>
        </div>
    )
}

export default SearchComponent;