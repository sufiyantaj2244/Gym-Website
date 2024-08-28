import express from 'express';
import cors from 'cors';
import connectDB from './database/db.js';
import Routes from './Routes/user-routes.js';
const app = express();

app.use(express.json());
app.use(cors());


app.use('/', Routes)
connectDB();
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
