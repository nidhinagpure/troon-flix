import React from "react";
import axios from "axios";

function TvShowCard({_id, title, timing, channel, thumbnail}) {
  return (
    <div>
      <img src={thumbnail}/>
       <h2>{title}</h2>
    </div>
  )
}

export default TvShowCard;
