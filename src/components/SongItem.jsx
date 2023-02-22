import React from "react";
import { Link } from "react-router-dom";

const SongItem = ({song, idx}) => {
    return (       
        <div className="song-item">
            <Link to={`/song/${idx}`}>
                <img src={song.songimg} alt={`${song.artistname} - ${song.songname}`} />
                <div className="song-info">
                    <h3>{song.songname}</h3>
                    <h4>{song.artistname}</h4>
                </div>
            </Link>
        </div>
    );
}

export default SongItem