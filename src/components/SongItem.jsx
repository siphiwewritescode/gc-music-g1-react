import React from "react";
import c418minecraft from "../assets/img/c418-minecraft.jpg"
import fireboydml from "../assets/img/fdml-bandana.jpg"
import akaenergy from "../assets/img/aka-energy.jpg"
import bbangelina from "../assets/img/bb-angelina.png"
import temsfreemind from "../assets/img/tems-freemind.jpg"

const SongItem = () => {

    const Songs = [
        {
            id: 1,
            title: "Bandana",
            artist: "Fireboy DML",
            image: fireboydml
        },
        {
            id: 2,
            title: "Enegry",
            artist: "AKA",
            image: akaenergy
        },
        {
            id: 3,
            title: "Angelina",
            artist: "Burna Boy",
            image: bbangelina
        },
        {
            id: 4,
            title: "Free Mind",
            artist: "Tems",
            image: temsfreemind
        }
    ];

    return (

        <div class="song-item">
            <a href="#">

                {Songs.map((data)=>(
                    <img src={data.id} alt={data.artist} />
                    <div class="song-info">
                        <h3>{data.title}</h3>
                        <h4>{data.artist}</h4>
                    </div>
                ))}  
            </a>
        </div>

        // <div class="song-item">
        //     <a href="#">
        //         <img src={c418minecraft} alt="C418 - Minecraft" />
        //         <div class="song-info">
        //             <h3>Minecraft</h3>
        //             <h4>C418</h4>
        //         </div>
        //     </a>
        // </div>
    );
}

export default SongItem