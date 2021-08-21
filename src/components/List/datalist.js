import data from './data';

function Datalist() {
    return (
    <div className="Datalist">
        <p><b>Track Title</b></p>
        <p>{data.name}</p>
        <p><b>Artist</b></p>
        <p>{data.artists[0].name}</p>
        <p><b>Album</b></p>
        <p>{data.album.name}</p>
    </div>
    )
}

export default Datalist;