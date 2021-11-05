import React from 'react'
import { songs } from './SongsData'

export const Player = () => {
    return (
        <div>
            <audio controls src={songs[0].src}></audio>
        </div>
    )
}
