import express from 'express';
import tutorRoutes from './routes/tutor.js';

const app = express();

app.use(express.json());

app.use('/tutor', tutorRoutes);

app.listen(4000, () => {
    console.log('Server berhasil di running di port 4000');
})