import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import TvShow from "./models/TvShows.js";

const app = express();
app.use(express.json()); // middleware
app.use(cors()); 

const connectDB = async () => {
    const connUrl = await mongoose.connect(process.env.MONGODB_URL);
    if ( connUrl) {
        console.log("Mongodb connected successfully");
    };
} // connection mongodb 

app.get("/health", ( req, res ) => {
    res.status(200).json({message:"Server is running"});
}); // check there server is running or not 

app.get("/tv_shows", async (req, res) => {

    const tvshows = await TvShow.find(); // read from database

    return res.status(200).json({
        success: true,
        data: tvshows,
        message:"Tv shows fetch successfully"
    });
});

app.post("/tv_shows", async (req, res) => {

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
});

const PORT = process.env.PORT || 5002; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});