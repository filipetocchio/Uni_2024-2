import express from 'express';
import { apiRouter } from './Router/routes';
import path from 'path';

const app = express();
const PORT = 8001;

app.use(express.static(path.join(__dirname, '/public')));
app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.send('Hello nodejs!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});