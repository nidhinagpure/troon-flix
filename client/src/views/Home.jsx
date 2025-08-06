import { useEffect, useState } from 'react'
import axios from "axios"
import TvShowCard from '../components/TvShowCard';
import Model from "./../components/Model";
import { CirclePlus as CirclePlusIcon } from "lucide-react"
import Input from '../components/Input';
import toast, { Toaster } from "react-hot-toast";
import Button from "../components/Button"
import { SquarePlus as SquarePlusIcon } from "lucide-react";


function Home() {
  const [tvShows, setTvShows] = useState([]);
  const [isModelOpen, setModelOpen] = useState(false);

  //for new show
  const [newShow, setNewShows] = useState({
    title: "",
    timing: "",
    channel: "",
    thumbnail: "",
  });

  const addTvshow = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/tv_shows`, {
        title:newShow.title,
        timing:newShow.timing,
        channel:newShow.channel,
        thumbnail:newShow.thumbnail,
      }
      );
      toast.success(response.data.message);

      loadTvshows();
      setModelOpen(false);
      setNewShows({
        title: "",
        timing: "",
        channel: "",
        thumbnail: "",
      });
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };


  const loadTvshows = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/tv_shows`
    );
    setTvShows(response.data.data);
  };

  useEffect(() => {
    loadTvshows();
  }, []); // Api call 

  return (
    <div>
      <h1 className='bottom-12 right-10 fixed bg-gray-300 rounded-full p-2'
        onClick={() => { setModelOpen(true) }}>
        <CirclePlusIcon className='h-14 w-14 cursor-pointer'
        /> </h1>
      <h1 className="text-4xl text-center pt-8 font-bold">Laugh Out Loud on TroonFlix -😍</h1>

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
              loadTvshows={loadTvshows}
            />);
        })}

      </div>
      <Model isOpen={isModelOpen}
        onClose={() => {
          setModelOpen(false);
        }}
      >
        <div className='w-[400px]'>
          <h1 className='font-bold text-4xl mb-6 text-center'>Add New Show</h1>

          <Input
            type="text"
            placeholder="Show Name"
            value={newShow.title}
            onChange={(val) =>
               {setNewShows({ ...newShow, title: val })
             }}
            lable=""
            size='md'
          />
          <Input
            type="text"
            placeholder="Channel"
            value={newShow.channel}
            onChange={(val) => { setNewShows({ ...newShow, channel: val }) }}
            lable=""
            size='md'
          />
          <Input
            type="text"
            placeholder="Timing ? Am / Pm"
            value={newShow.timing}
            onChange={(val) => { setNewShows({ ...newShow, timing: val }) }}
            lable=""
            size='md'
          />
          <Input
            type="text"
            placeholder="Image Url"
            value={newShow.thumbnail}
            onChange={(val) => { setNewShows({ ...newShow, thumbnail: val }) }}
            lable=""
            size='md'
          />
          {newShow.thumbnail ? (
            <img src={newShow.thumbnail}
              value={newShow.thumbnail}
              alt='thambnail'
              className='w-full h-40 object-cover rounded-md mb-3'
            />
          ) : null}
          <div>
            
              <Button
                title={"Add Show"}
                onClick={() => {
                  addTvshow();
                }}
                variant='primary'
                size="lg"
                 icon={<SquarePlusIcon className="h-5 w-5 inline" />}
              iconPosition={"right"}
              />
          </div>


        </div>
      </Model>
      <Toaster />
    </div>
  );
}

export default Home

