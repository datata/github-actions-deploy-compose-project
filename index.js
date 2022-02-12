const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3307;

app.get('/', (req, res) => res.send('Mi primer deploy automatizado con pipelines'));
app.get('/projects', (req, res) => res.send('Node devops'));
app.get('/contact', (req, res) => res.send('Contact'));



app.listen(port, () => console.log(port));