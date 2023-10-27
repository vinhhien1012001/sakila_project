import express from 'express';
import actorRouter from './routes/actor.route.js'

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`Server is running`);
})

app.use(express.json());
app.use('/api/actors', actorRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
