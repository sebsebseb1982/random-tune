import * as express from 'express';
import * as fs from 'fs';

const app: express.Application = express();

let files = fs.readdirSync('./tunes');

console.log('files', files);

app.get('/random-tune', (req, res) => {

    res.sendFile(files[0]);
});

let port = 6666;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});