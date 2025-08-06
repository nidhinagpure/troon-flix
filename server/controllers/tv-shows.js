import TvShow from "./../models/TvShows.js";

const getTvShow = async (req, res) => {
    const tvshows = await TvShow.find(); // read from database
    return res.status(200).json({
        success: true,
        data: tvshows,
        message: "Tv shows fetch successfully"
    });
};

const postTvShow = async (req, res) => {
    const { title, timing, channel, thumbnail } = req.body; // read 
    /*const newTvShow = { // object
        title,
        timing,
        channel,
        thumbnail
    };
    TV_SHOWS.push(newTvShow);*/

    if(!title) {
        return res.status(400).json({
            success:false,
            message:"Title is required",
            data:null
        })
    }
    if(!channel) {
        return res.status(400).json({
            success:false,
            message:"channel is required",
            data:null
        })
    }
    if(!timing) {
        return res.status(400).json({
            success:false,
            message:"Timing is required",
            data:null
        })
    }
    if(!thumbnail) {
        return res.status(400).json({
            success:false,
            message:"Thambnail is required",
            data:null
        })
    }
    const newTvShow = new TvShow({
        title,
        timing,
        channel,
        thumbnail,
    });
    const savedTvshow = await newTvShow.save();

    return res.status(200).json({
        success: true,
        data: savedTvshow,
        message: "Tv show added successfully",
    });
};

const getTvShowbyId = async (req, res) => {
    const { id } = req.params;


    try {
        const tvShow = await TvShow.findById(id);

        if (!tvShow) {
            return res.status(404).json({
                success:false,
                message: "Tv show not found",
                data: null,
            });
        }

        return res.status(200).json({
            success: true,
            data: tvShow,
            message: "Tv show fetched successfully",
        });

    } catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message,
            data: null,
        });
    }
};

const deleteTvShowById = async (req, res) => {
    const { id } = req.params;

    await TvShow.deleteOne({ _id: id });
    
    return res.status(200).json({
        success: true,
        message: "Tv show delete successfully",
    });
};

export {
    getTvShow,
    postTvShow,
    getTvShowbyId,
    deleteTvShowById,
}