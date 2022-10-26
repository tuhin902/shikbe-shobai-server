const express = require('express')
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('course api running');
});

app.listen(port, () => {
    console.log('course api running on port', 4000);
});