import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dataevn";
dotenv.config();

const app = express();
app.use(express.json()); // middleware
app.use(cors()); 

const connectDB = async () => {
    const connUrl = await mongoose.connect(process.env.MONGODB_URL);
    if ( connUrl) {
        console.log("Mongodb connected successfully");
    };
}

const TV_SHOWS = [];

app.get("/health", ( req, res ) => {
    res.status(200).json({message:"Server is running"});
}); // check there server is running or not 

app.get("/tv_shows", (req, res) => {
    return res.status(200).json({
        success: true,
        data: TV_SHOWS,
        message:"Tv shows fetch successfully"
    });
});

app.post("/tv_shows", (req, res) => {

    const { title, timing, channel, thumbnail} = req.body; // read 

    const newTvShow = { // object
        title,
        timing,
        channel,
        thumbnail
    };

    TV_SHOWS.push(newTvShow);

    return res.status(200).json({
        success:true,
        data:newTvShow,
        message:"Tv show added successfully",
    });




});

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});