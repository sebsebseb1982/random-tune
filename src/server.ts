import * as express from 'express';
import * as fs from 'fs';

const app: express.Application = express();

let files = fs.readdirSync('./..');

console.log('files', files);

app.get('/random-tune', (req, res) => {

    //res.sendFile();
});

let port = 666;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});