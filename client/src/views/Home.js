import axios from "axios"
import TvShowCard from "../components/TvShowCard";

import React, { useEffect, useState } from 'react'

function Home() {
   const [ tvshows, setTvShows ] = useState([]);

   const loadTvShows = () => {
    const response = axios.get(`${import.meta.env.VITE_API_URL}/tv_show`
        
    );
    setTvShows(response.data.data);

   };

   useEffect(() => {
      loadTvShows();
    }, []);

    return (
      <div>
        {tvshows.map((serialobj) => {
          const { _id, title, timing, channel, thumbnail } = serialobj;

          return <TvShowCard
          key={_id}
          _id={_id}
          title={title}
          timing={timing}
          channel={channel}
          thumbnail={thumbnail}>
        </TvShowCard>
          
        })}
      </div>
    )
  }

  

export default Home
