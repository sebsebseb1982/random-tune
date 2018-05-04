import * as express from 'express';
import * as fs from 'fs';

const app: express.Application = express();

let tunes = fs.readdirSync('./tunes');

app.get('/random-tune', (req, res) => {
    //let randomTunePath = '/home/pi/random-tune/tunes/' + tunes[Math.floor(Math.random() * tunes.length)];
    let randomTunePath = '/home/pi/random-tune/tunes/' + tunes[0];
    console.log('req:', req);
    console.log('Serving ', randomTunePath);
    res.sendFile(randomTunePath);
});

let port = 8082;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});