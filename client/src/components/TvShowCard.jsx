import React from 'react'

function TvShowCard({_id, title, timing, channel, thumbnail}) {
  return (
    <div>
      <img src={thumbnail} alt={title} className="h-[250px] w-[400px] object-cover"/>
      <h2>{timing}</h2>
      <h1>{title}</h1> 
    </div>
  )
}

export default TvShowCard