const express = require('express');
const userAuthMiddleware = require('../middleware/middleware');
const { task } = require('../db/database');

const router = new express.Router();

router.get('/', userAuthMiddleware, async (req, res) => {
    res.send("Hello world this is Great");
});

// Create a Task 
router.post('/create', userAuthMiddleware, async (req, res) => {
    try {
        const taskBody = { ...req.body, owner: req.user._id };
        const newTask = new task(taskBody);
        await newTask.save();
        res.status(201).json({
            message : "Successfully Created Task!!"
        });
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
});

router.get('/allTasks', userAuthMiddleware, async(req,res) => {
    try{
        const tasks = await task.find({
            owner : req.user._id
        });
        res.send(tasks);
    }catch(e){
        res.status(500).json({
            message : "Couldn't fetch All the tasks"
        })
    }
})
module.exports = router;