import React from 'react'
import * as CgIcons from 'react-icons/cg'

export const Controls = (props) => {
    return (
        
            <div className="audio-controls">
                <button
                    type="button"
                    className="prev"
                    aria-label="Previous"
                    onClick={props.onPrevClick}
                >
                    <CgIcons.CgPlayBackwards />
                </button>
                {props.isPlaying ? (
                    <button
                    type="button"
                    className="pause"
                    onClick={() => props.onPlayPauseClick(false)}
                    aria-label="Pause"
                    >
                    <CgIcons.CgPlayPauseO />
                    </button>
                ) : (
                    <button
                    type="button"
                    className="play"
                    onClick={() => props.onPlayPauseClick(true)}
                    aria-label="Play"
                    >
                    <CgIcons.CgPlayButtonO />
                    </button>
                )}
                <button
                    type="button"
                    className="next"
                    aria-label="Next"
                    onClick={props.onNextClick}
                >
                    <CgIcons.CgPlayForwards />
                </button>
            </div>

    )
}
