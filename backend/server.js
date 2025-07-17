import express from 'express';
import cors from 'cors';
import ConnectDB from './config/DBConnect.js';
import './config/config.js'
import todoRoutes from './routes/todoRoutes.js'

const app = express();
const PORT = process.env.PORT;


app.use(cors());
app.use(express.json());

ConnectDB();


app.use('/todo',todoRoutes);


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})