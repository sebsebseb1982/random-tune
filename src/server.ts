import * as express from 'express';
import * as fs from 'fs';

const app: express.Application = express();

let tunes = fs.readdirSync('./tunes');

app.get('/random-tune.mp3', (req, res) => {
    let randomTunePath = '/home/pi/random-tune/tunes/' + tunes[Math.floor(Math.random() * tunes.length)];
    console.log('Serving ', randomTunePath);
    res.sendFile(randomTunePath);
});

let port = 8082;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});