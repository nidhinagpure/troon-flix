import React from 'react'

function TvShowCard({_id, title, timing, channel, thumbnail}) {
  return (
    <div>
      <img src={thumbnail} className="h-[230px] w-[360px] object-cover" alt={title}/>
      <h2>{timing}</h2>
      <h1>{title}</h1> 
    </div>
  )
}

export default TvShowCard