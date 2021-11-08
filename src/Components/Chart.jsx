import { ChartData, categorylist } from './ChartData'
import './Chart.css'
import {useState, useMemo } from "react";


export const Chart = () => { 
const [selectedItem, setItem] = useState(0)
const [show, setShow] = useState(false)
const [filter, setFilter] = useState("all");

const filteredPortfolio = useMemo(() => {
  if (filter === "all") return ChartData;
  return ChartData.filter((p) => p.category === filter);
}, [filter]);

    return (
        <>
        <div className='chart_header'>
            <h2>Week 6<sup className='chart_sup'>th</sup> Of November </h2>
        </div>

        <div className="button-group">
          {categorylist.map((types) => (
            <button
              onClick={() => setFilter(types.category)}
              type="button"
              className="active"
              id="btn1"
              data-filter="*"
              key={types.id}
            >
              {types.category}
            </button>
          ))}
        </div>

        <ul className='chart_list'>
        {filteredPortfolio.map(item => (
            <li key={item.id}>
            <div className='chart_container' onClick={() => { setItem(item.id); setShow(!show);}}>
                    <div className='chart_left'>
                        <div className='chart_number'>
                            <h1>{item.id}</h1>
                        </div>
                        <div className='chart_week'>
                            <h3>{item.onChart}</h3>
                        </div>
                    </div>
                    <div className='chart_song--container'>
                        <div>
                            <img className='chart_img' src={item.imgUrl} alt="" />
                        </div>
                        <div className='chart_song'>
                            <div className='chart_song--info'>
                                <h2 className='chart_mobile--number'>{item.id}</h2>
                                <h2>{item.songName}</h2>
                                <p>{item.artist}</p>
                            </div>
                            <div className='chart_release'>
                            <h3 className='release'>{item.releaseDate}</h3>
                            <h3 className='streams'>{item.totalStreams}</h3>
                            </div>  
                        </div>
                    </div>
                </div>
                {selectedItem === item.id && show ? 
                <div className='extra'>
                   <h3>
                      {item.iframe}
                   </h3>
                   <div>
                   <h3 className='release'>
                       {item.releaseDate}
                    </h3>
                   </div>
                </div>: 
                ''} 
            </li>
        ))}
      </ul>
      </>
    )
}
