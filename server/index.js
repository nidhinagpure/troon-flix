import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { 
    getTvShow ,
    postTvShow, 
    getTvShowbyId, 
    deleteTvShowById 
    } from "./controllers/tv-shows.js";
dotenv.config();

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

app.get("/tv_shows", getTvShow );
app.post("/tv_shows", postTvShow );
app.get("/tv_show/:id", getTvShowbyId);
app.delete("/tv_show/:id", deleteTvShowById)

const PORT = process.env.PORT || 5002; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});