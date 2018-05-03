
const express = require('express');
const app = express();

app.get('/random-tune', (req, res) => {
    res.send('Hello World!')
});

app.listen(666, () => {
    console.log('Example app listening on port 3000!')
});

