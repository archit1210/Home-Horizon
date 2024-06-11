import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to db");
}).catch((err) => {
    console.log(err)
});

const app = express();

app.use('/api/user', userRouter)

app.listen(3000, () => {
    console.log("Server is listning to port 3000!!");
})