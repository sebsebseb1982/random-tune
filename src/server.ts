import * as express from 'express';
import * as fs from 'fs';
import * as _ from "lodash";

const app: express.Application = express();

let tunes = fs.readdirSync('./tunes');
let randomTunePath = '/home/pi/random-tune/tunes/' + tunes[Math.floor(Math.random() * tunes.length)];

app.get('/random-tune', (req, res) => {
    console.log('Serving ', randomTunePath);
    _.debounce(() => {
        console.log('Randomizing next tune');
        randomTunePath = '/home/pi/random-tune/tunes/' + tunes[Math.floor(Math.random() * tunes.length)];
    }, 500);
    console.log('tutu');
    res.sendFile(randomTunePath);
});

let port = 8082;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});