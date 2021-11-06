import { Controls } from './Controls';
import './Player.css'
import { PlayLogic } from './PlayLogic';

export const Player = () => {
const [
        title, artist,image,
        isPlaying, setIsPlaying,
        onScrubEnd,onScrub,
        toPrevTrack,toNextTrack,
        trackProgress, duration, trackStyling
    ] = PlayLogic()

  return (
    <div className='player_container'>
        <div className="audio-player">
            <div className='track'>
                <img
                className="artwork"
                src={image}
                alt={`track artwork for ${title} by ${artist}`}
                />
            </div>
            <div>
                <h2 className="title">{title}</h2>
                <h3 className="artist">{artist}</h3>
            </div>
            <div className="track-info">
                <div>
                    <Controls
                        isPlaying={isPlaying}
                        onPrevClick={toPrevTrack}
                        onNextClick={toNextTrack}
                        onPlayPauseClick={setIsPlaying}
                    />
                        <input
                        type="range"
                        value={trackProgress}
                        step="1"
                        min="0"
                        max={duration ? duration : `${duration}`}
                        className="progressBar"
                        onChange={(e) => onScrub(e.target.value)}
                        onMouseUp={onScrubEnd}
                        onKeyUp={onScrubEnd}
                        style={{ background: trackStyling }}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
