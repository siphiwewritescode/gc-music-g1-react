import React from "react";

const SongItem = ({song}) => {
    return (       
        <div className="song-item">
            <a href="#">
                <img src={song.songimg} alt={`${song.artistname} - ${song.songname}`} />
                <div className="song-info">
                    <h3>{song.songname}</h3>
                    <h4>{song.artistname}</h4>
                </div>
            </a>
        </div>
    );
}

export default SongItem