import React from 'react'
import { ChartData } from './Components/ChartData'

export const App = () => {
  return (
    <div>
      {ChartData.map(chart => (
        <div>
          {chart.id}
          {chart.songName}
        </div>
      ))}
    </div>
  )
}
