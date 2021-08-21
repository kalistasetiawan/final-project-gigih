import data from './data';

function Avatar() {
    return (
        <img className="Avatar"
            src={data.album.images[0].url}
            alt={data.album.id}
            width="200" 
            height="200"
        />
    );
}

export default Avatar;