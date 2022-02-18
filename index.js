const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Task = require('./models/task');
require('dotenv').config();

app.use(express.json());

mongoose
    .connect('mongodb://db_devops:27017')
    .then((db) => console.log("Db is connected"))
    .catch((err) => console.log(err));

const port = process.env.PORT || 3307;

app.get('/', (req, res) => res.send('Mi primer deploy automatizado con pipelines'));
app.get('/projects', (req, res) => res.send('Node devops'));
app.get('/contact', (req, res) => res.send('Contact'));
app.get('/task', async(req, res) => {

    const tasks = await Task.find();

    res.status(200).json(tasks);
});

app.post('/task', async(req, res) => {
    const { title, description } = req.body;

   try {
    const task = new Task(
        {
            title,
            description
        }
    );

    await task.save();  
    
    return res.status(200).json("Task created");
   } catch (error) {
       console.log(error);
       return res.status(500).json("Error creating task");
   }
});

app.delete('/task/:id', async(req, res) => {
    try {
        const id = req.params.id;
        await Task.findByIdAndRemove(id);
        return res.status(200).json({ data: "Task deleted" });
    } catch (error) {
        logger.error(error);
        return res.status(404).json({ error: "Task not found" });
    }
});

app.get('/task/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findById(id);
        
        return res.status(200).json(task);
    } catch (error) {
        logger.error(error);
        return res.json({ error: "Task not found" });
    }
});



app.listen(port, () => console.log(port));