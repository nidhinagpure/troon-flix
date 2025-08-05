import React from 'react'
import { AlarmClock as ClockIcon,
         MonitorPlay as MonitorPlayIcon

} from "lucide-react"

function TvShowCard({_id, title, timing, channel, thumbnail}) {
  return (
    <div className='border border-gray-300 rounded-lg shadow-md p-4 m-4'>
      <img src={thumbnail} className="h-[230px] w-[360px] object-cover" alt={title}/>
      <h1 className='text-2xl my-2 font-bold'>{title}</h1> 
      <p><ClockIcon className='inline mr-2 h-5 mb-1'/>{timing}</p>
      <p className='text-xl'><MonitorPlayIcon className='inline mr-2 h-5 mb-1'/>{channel}</p>

    </div>
  )
}

export default TvShowCard