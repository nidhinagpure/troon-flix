import TvShow from "./../models/TvShows.js";

const getTvShow = async (req, res) => {
    const tvshows = await TvShow.find(); // read from database
    return res.status(200).json({
        success: true,
        data: tvshows,
        message:"Tv shows fetch successfully"
    });
};

const postTvShow = async (req, res) => {
      const { title, timing, channel, thumbnail} = req.body; // read 
    /*const newTvShow = { // object
        title,
        timing,
        channel,
        thumbnail
    };

    TV_SHOWS.push(newTvShow);*/

    const newTvShow = new TvShow ({
        title,
        timing,
        channel,
        thumbnail,
    });
    const savedTvshow = await newTvShow.save();

    return res.status(200).json({
        success:true,
        data:savedTvshow,
        message:"Tv show added successfully",
    });
};

const getTvShowbyId = (req, res) => {
    const { id } = req.params;

    return res.status(200).json({
        success:true,
        data:tvshows,
        message:"Tv show fetched successfully",
    });
}; 

export {
         getTvShow,
         postTvShow,
         getTvShowbyId,
    }