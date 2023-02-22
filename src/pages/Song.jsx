import React from "react";
import {useParams} from "react-router-dom"
import Header from "../components/Header";

import fireboydml from "../assets/img/fdml-bandana.jpg"
import akaenergy from "../assets/img/aka-energy.jpg"
import bbangelina from "../assets/img/bb-angelina.png"
import temsfreemind from "../assets/img/tems-freemind.jpg"

const Song = () => {
    const {id} = useParams()

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

    let currSong = songs[+id]

    return (       
      <main>
        <Header />
        <section className="song-section">
            <div className="song-wrapper">
                <img src={currSong.songimg} alt={`${currSong.artistname} - ${currSong.songname}`} />
                <div className="song-info">
                    <h3>{currSong.artistname}</h3>
                    <h4>{currSong.songname}</h4>
                </div>
            </div>
        </section>
      </main>
    )
}

export default Song