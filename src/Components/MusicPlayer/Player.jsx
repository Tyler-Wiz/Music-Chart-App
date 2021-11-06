import { Controls } from './Controls';
import './Player.css'
import { PlayLogic } from './PlayLogic'


export const Player = () => {
const [
        title, artist,image,
        isPlaying, setIsPlaying,
        onScrubEnd,onScrub,
        toPrevTrack,toNextTrack,
        trackProgress, duration, trackStyling
    ] = PlayLogic()

  return (
    <div className="audio-player">
        <div className='advert_area'>
            <h2>Advert Postion</h2>
        </div>
        <div className='track_artwork'>
            <div>
                <img
                className="artwork"
                src={image}
                alt={`track artwork for ${title} by ${artist}`}
                />
            </div>
            <div className='track_details'>
                <h3 className="title">{title}</h3>
                <p className="artist">{artist}</p>
            </div>
            
        </div>
        <div className='track_progress'>
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
                <span className="title_mobile">{title}</span>
                <span className="artist_mobile">{artist}</span>
        </div>
        <div className='track_controls'>
            <Controls
                isPlaying={isPlaying}
                onPrevClick={toPrevTrack}
                onNextClick={toNextTrack}
                onPlayPauseClick={setIsPlaying}
            />    
        </div>
        
    </div>
  )
}
