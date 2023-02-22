import React from "react";
import SongItem from './SongItem';

const SongSection = () =>{
    return(
        <section class="songs-section">
            <div class="songs-list">

                <SongItem/>
                <SongItem/>
                <SongItem/>
                
            </div>
        </section>
    )
}

export default SongSection
