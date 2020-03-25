const express = require ('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());

/*
app.use(cors({
    origin: 'http://meuapp.com'
}));
*/
app.use(express.json()); //Before all querys, make express go to body of query and convert json in JS
app.use(routes);
app.listen(3333);