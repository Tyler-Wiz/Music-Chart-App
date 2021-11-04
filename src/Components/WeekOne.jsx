import { ChartData } from './ChartData'
import './Chart.css'

export const WeekOne = () => {
    return (
        <div>
        {ChartData.map(item => (
          <div className='chart_container' key={item.id}>
            <div className='chart_left' >
                <div className='chart_number'><p>{item.id}</p></div>
                <div className='chart_week'><p>{item.onChart}</p></div>
            </div>
            <div className='chart_song--container'>
                <div className='chart_img'>
                    <img src={item.imgUrl} alt="" />
                </div>
                <div className='chart_song--info'>
                     <h2>{item.songName}</h2>
                     <p>{item.artist}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    )
}
