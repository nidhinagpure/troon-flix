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
  const fixTvShow = [
    {
      title: "Shaka Boom Boom",
      timing: "5:00pm - 6:00pm",
      channel: "star utsav",
      thumbnail: "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-49091268/49091268.jpg",
    },
    {
      title: "shaktimaan",
      timing: "4:00pm - 5:00pm",
      channel: "star utsav",
      thumbnail: "https://i.ytimg.com/vi/Ux70bUb4tyo/maxresdefault.jpg",
    },
    {
      title: "Ring wrong ring",
      timing: "7:00pm - 8:00pm",
      channel: "star utsav",
      thumbnail: "https://m.media-amazon.com/images/M/MV5BYWU1YTUxYzItOTY5ZS00ZTQ3LTk1MmMtYjQ5ZTQ0NGEwMDVjXkEyXkFqcGc@._V1_.jpg",
    },    
  ]
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
        title: newShow.title,
        timing: newShow.timing,
        channel: newShow.channel,
        thumbnail: newShow.thumbnail,
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
      <h1 className='h-15 w-15 cursor-pointer fixed bottom-5 right-5 bg-blue-500 text-white  shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center rounded-full z-50'
        onClick={() => {
          setModelOpen(true);
        }}>
        <CirclePlusIcon className='h-14 w-14 cursor-pointer'
        /> </h1>
      <h1 className="text-4xl text-center pt-8 font-bold">Laugh Out Loud on TroonFlix -😍</h1>
      <div className='flex flex-wrap justify-center pt-6'>
      {fixTvShow.map((fixObj) => {
          const {title, timing, channel, thumbnail } = fixObj;
          return(
            <TvShowCard
              title={title}
              timing={timing}
              channel={channel}
              thumbnail={thumbnail}
            />
          );
      })}
      </div>

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
            onChange={(val) => {
              setNewShows({ ...newShow, title: val })
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

