import React, { useEffect, useState } from 'react'
import axios from "axios"
import TvShowCard from '../components/TvShowCard';

function Home() { 
   const [ tvShows, setTvShows] = useState ([]);

   const loadTvshows = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/tv_shows`);
    setTvShows(response.data.data);
   };

   useEffect(() => {
    loadTvshows();
   }, []);

  return (
    <div>
        <h1>Troon Flix</h1>
        {tvShows.map((serialObj) => {
            const { _id, title, timing, channel, thumbnail } = serialObj;
            return (
            <TvShowCard
               key={_id}
               _id={_id}
               title={title}
               timing={timing}
               channel={channel}
               thumbnail={thumbnail} 
            />
          );
        })}

    </div>
  );
}

export default Home

