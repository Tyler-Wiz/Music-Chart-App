import { ChartData } from './ChartData'
import './Chart.css'

export const WeekOne = () => {
    return (
        <div>
            <div className='chart_desc'>
                <div className='chart_desc-left'>
                    <h3>Num</h3>
                    <h3>Week</h3>
                </div>
                <div className='chart_desc-right'>
                    <h3>Song</h3>
                    <h3>Release Date</h3>
                </div>
            </div>
        {ChartData.map(item => (
          <ul key={item.id}>
            <li className='chart_container'>
                <div className='chart_left' >
                    <div className='chart_number'><h1>{item.id}</h1></div>
                    <div className='chart_week'><p>{item.onChart}</p></div>
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
                           <h3>{item.totalStreams}</h3>
                        </div>  
                    </div>
                </div>
            </li>
          </ul>
        ))}
      </div>
    )
}
