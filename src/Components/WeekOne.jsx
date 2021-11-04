import { ChartData } from './ChartData'
import './Chart.css'

export const WeekOne = () => {

    return (
        <ul>
            <li className='chart_container--text'>
                <div className='chart_left'>
                    <div className='chart_number--text'>
                        <h3>#</h3>
                    </div>
                    <div className='chart_week'>
                        <h3>Week</h3>
                    </div>
                </div>
                <div className='chart_song--container'>
                    <div className='chart_img'>
                         
                    </div>
                    <div className='chart_song'>
                        <div className='chart_song--info'>
                        <h3>songs</h3>
                        </div>
                        <div className='chart_release'>
                           <h3>release Date</h3>
                           <h3 className='streams'>Streams</h3>
                        </div>  
                    </div>
                </div>
            </li>
        {ChartData.map(item => (
            <li className='chart_container' key={item.id}>
                <div className='chart_left'>
                    <div className='chart_number'>
                        <h1>{item.id}</h1>
                    </div>
                    <div className='chart_week'>
                        <h3>{item.onChart}</h3>
                    </div>
                </div>
                <div className='chart_song--container'>
                    <div className='chart_img'>
                        <img src={item.imgUrl} alt="" />
                    </div>
                    <div className='chart_song'>
                        <div className='chart_song--info'>
                            <h2>{item.songName}</h2>
                            <p>{item.artist}</p>
                        </div>
                        <div className='chart_release'>
                           <h3>{item.releaseDate}</h3>
                           <h3 className='streams'>{item.totalStreams}</h3>
                        </div>  
                    </div>
                </div>
            </li>
        ))}
      </ul>
    )
}
