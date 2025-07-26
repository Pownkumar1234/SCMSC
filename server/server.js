import express from "express"; 
import dotenv, { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import {connectDB} from "./config/db.js";
import userRouter from "./routes/userRoutes.js";


dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));


app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use("/api/auth", userRouter);




await connectDB();
app.listen(PORT, () => {
  console.log(`server is running on PORT: ${PORT}`);
});