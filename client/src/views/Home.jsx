import { useEffect, useState } from 'react'
import axios from "axios"
import TvShowCard from '../components/TvShowCard';
import Model from "./../components/Model";

function Home() {
  const [tvShows, setTvShows] = useState([]);
  const [isModelOpen, setModelOpen] = useState(false);

  const loadTvshows = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/tv_shows`);
    setTvShows(response.data.data);
  };

  useEffect(() => {
    loadTvshows();
  }, []); // Api call 

  return (
    <div>
      <h1 onClick={() => { setModelOpen(true) }}>❌</h1>
      <h1 className="text-4xl text-center pt-6 font-bold">Laugh Out Loud on TroonFlix -😍</h1>
      <div className='flex flex-wrap justify-center pt-6'>
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
            />);
        })}

      </div>
      <Model isOpen={isModelOpen}
        onClose={() => {
          setModelOpen(false);
        }}
        title={"Add Movie Model"}
      >
        <div>
          
        </div>
      </Model>
    </div>
  );
}

export default Home

