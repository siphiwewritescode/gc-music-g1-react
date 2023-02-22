import React from "react";
import SongItem from './SongItem';

import fireboydml from "../assets/img/fdml-bandana.jpg"
import akaenergy from "../assets/img/aka-energy.jpg"
import bbangelina from "../assets/img/bb-angelina.png"
import temsfreemind from "../assets/img/tems-freemind.jpg"

const SongSection = () =>{
    const songs = [
        {
            "songurl": "song-1.html",
            "songimg": fireboydml,
            "songname": "Bandana",
            "artistname": "Fireboy DML"          
        },
        {
            "songurl": "song-2.html",
           "songimg": akaenergy,
            "songname": "Enegry",
            "artistname": "AKA",
            
        },
        {
            "songurl": "song-3.html",
            "songimg": bbangelina,
            "songname": "Angelina",
            "artistname": "Burna Boy"           
        },
        {
            "songurl": "song-4.html",
            "songimg": temsfreemind,
            "songname": "Free Mind",
            "artistname": "Tems",            
        }
    ]

    return(
        <section className="songs-section">
            <div className="songs-list">
                {
                    songs.map((song, idx)=> (<SongItem key={idx} song={song} idx={idx}/>))
                }                
            </div>
        </section>
    )
}

export default SongSection
