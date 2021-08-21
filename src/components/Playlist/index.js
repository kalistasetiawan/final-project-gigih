import listdata from './listdata';

function Playlist() {
    return (
        <div className="Playlist">
            { listdata.map((value) => {
                    return (
                        <div class="box">
                            <p><img className="Avatar" src={value.album.images[0].url} alt={value.album.id} width="150" height="150"/></p>
                            <h3>{value.name}</h3>
                            <b>{value.artists[0].name}</b> - {value.album.name}
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Playlist;