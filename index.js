const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;

app.use(cors());

const categories = require('./data/categories.json');
const courseinfo = require('./data/course.json');

app.get('/', (req, res) => {
    res.send('course api running');
});

app.get('/course-categories', (req, res) => {
    res.send(categories);
})

app.get('/courseinfo/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courseinfo.find((n => n.id === id));
    res.send(selectedCourse);
})



app.listen(port, () => {
    console.log('course api running on port', port);
});