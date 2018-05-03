import * as express from 'express';
import * as fs from 'fs';

const app: express.Application = express();

let tunes = fs.readdirSync('./tunes');

app.get('/random-tune', (req, res) => {
    res.sendFile('/home/pi/random-tune/tunes/' + tunes[Math.floor(Math.random() * tunes.length)]);
});

let port = 8080;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});