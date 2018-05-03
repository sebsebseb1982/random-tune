import * as express from 'express';
import * as fs from 'fs';

const app: express.Application = express();

let files = fs.readdirSync('./tunes');

console.log('files', files);

app.get('/random-tune', (req, res) => {

    res.sendFile('/home/pi/random-tune/tunes/' + files[0]);
});

let port = 8080;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});