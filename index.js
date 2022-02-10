const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3307;

app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(port));