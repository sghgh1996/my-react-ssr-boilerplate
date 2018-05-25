import express from 'express';
import renderer from './client/helpers/renderer';

const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send(renderer());
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});