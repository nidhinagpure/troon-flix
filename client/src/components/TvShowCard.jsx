import React from 'react'

function TvShowCard({_id, title, timing, channel, thumbnail}) {
  return (
    <div>
      <img src={thumbnail}/>
      <h2>{timing}</h2>
       <h1>{title}</h1> 
    </div>
  )
}

export default TvShowCard