import * as express from 'express';
import * as fs from 'fs';
import * as _ from "lodash";

const app: express.Application = express();

let tunes = fs.readdirSync('./tunes');

let randomTunePath;

let randomizeTuneDebounced =  _.debounce(
    () => {
        console.log('Randomizing next tune');
        randomTunePath = '/home/pi/random-tune/tunes/' + tunes[Math.floor(Math.random() * tunes.length)];
    },
    500
);

randomizeTuneDebounced();
app.get('/random-tune', (req, res) => {
    console.log('Serving ', randomTunePath);
    randomizeTuneDebounced();
    res.sendFile(randomTunePath);
});

let port = 8082;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});