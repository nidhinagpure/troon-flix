import express from "express";
import cors from "cors";

const app = express();
app.use(express.json()); // middleware
app.use(cors()); 

app.get("/health", ( req, res ) => {
    res.status(200).json({message:"Server is running"});
}); // check there server is running or not 


const PORT = 5002;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});