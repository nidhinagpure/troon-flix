import React from 'react'
import axios from 'axios'
import {
  AlarmClock as ClockIcon,
  MonitorPlay as MonitorPlayIcon
} from "lucide-react"
import Button from './Button'
import { Trash2 as DeteletIcon } from "lucide-react"
import toast, { Toaster } from 'react-hot-toast'
import Model from "./../components/Model";

const deleteTvshow = async (id, loadTvShows) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_API_URL}/tv_shows/${id}`
    );
    toast.success(response.data.message);
    loadTvShows();
  } catch (e) {
    toast.error(e.response.data.message);
  }
};

function TvShowCard({ _id, title, timing, channel, thumbnail, loadTvShows }) {
  const [isConfirmationOpen, setIsConfirmationOpen] = React.useState(false);

  return (
    <div className='border border-gray-300 rounded-lg shadow-md p-4 m-4 relative'>
      <img src={thumbnail} className="h-[230px] w-[360px] object-cover" alt={title} />
      <h1 className='text-2xl my-2 font-bold'>{title}</h1>
      <p><ClockIcon className='inline mr-2 h-5 mb-1' />{timing}</p>
      <p className='text-xl'>
        <MonitorPlayIcon className='inline mr-2 h-5 mb-1' />
        {channel}</p>

      <Button
        title={"Delete"}
        size="sm"
        variant='danger'
        icon={<DeteletIcon className="h-5 bottom-5 inline w-3" />}
        iconPosition={"right"}
        className='absolute bottom-2 right-5'
        onClick={() => {
          setIsConfirmationOpen(true);
        }}
      />
      <Toaster />

       <Model
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
      >
        <div className="w-[400px]">
          <h1 className="text-2xl  mb-4">Are you sure?</h1>
          <p>
            Once you delete this TV show, it will be permanently removed from
            the database. This action cannot be undone.
          </p>

          <div className="flex justify-around">
            <Button
              title={"Cancel"}
              size="md"
              variant="secondary"
              onClick={() => setIsConfirmationOpen(false)}
            />

            <Button
              title={"Delete"}
              size="md"
              variant="danger"
              onClick={() => {
                deleteTvshow(_id, loadTvShows);
                setIsConfirmationOpen(false);
              }}
            />
          </div>
        </div>
      </Model>
    </div>
  );
}

export default TvShowCard;