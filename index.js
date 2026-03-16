import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express();
dotenv.config();

const PORT = process.env.PORT ; 
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(() => {
    console.log("Database is Connected Successfully.");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})

.catch((error) => {
    console.error("MongoDB Connection Error:", error);
});

const userSchema = new mongoose.Schema({}, { strict: false });

const UserModel = mongoose.model("Users", userSchema,"Sales");


app.get("/getUsers", async (req, res) => {
    try{
        const userData = await UserModel.find();
        res.json(userData);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
});

app.use(express.static("public"));