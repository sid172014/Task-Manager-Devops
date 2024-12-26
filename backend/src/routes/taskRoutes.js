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
        });
    }
});

// Get all Tasks
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

// Get important Tasks
router.get('/impTasks', userAuthMiddleware, async (req,res) => {
    try{
        const tasks = await task.find({
            owner : req.user._id,
            important : true
        });
        res.send(tasks);
    }catch(e){
        res.status(500).json({
            message : "Couldn't fetch the Tasks"
        });
    }
});


// Get completed Tasks
router.get('/completedTasks', userAuthMiddleware, async(req,res) => {
    try{
        const tasks = await task.find({
            owner : req.user._id,
            completed : true
        });
        res.send(tasks);
    }catch(e){
        res.status(500).json({
            message : "Couldn't Fetch all the Completed Tasks"
        })
    }
})


// Get Incompleted Tasks
router.get('/incompletedTasks', userAuthMiddleware, async(req,res) => {
    try{
        const tasks = await task.find({
            owner : req.user._id,
            completed : false
        });
        res.send(tasks);
    }catch(e){
        res.status(500).json({
            message : "Couldn't Fetch all the In-Completed Tasks"
        })
    }
});

// Complete Or Incomplete Task
router.get('/completeTask/:id', userAuthMiddleware, async (req,res) => {
    try{
        const completeTask = await task.findOneAndUpdate({
            _id : req.params.id
        }, [
            {$set : {completed : {$not : "$completed"}}}
        ]);
        
        res.send(completeTask);
    }catch(e){
        res.status(500).json({
            message : "Error while completing the task on the backend"
        })
    }
});

// Update Important tasks
router.get('/importantTask/:id', userAuthMiddleware, async(req,res) => {
    try{
        const updateTask = await task.findOneAndUpdate({
            _id : req.params.id
        }, [
            {$set : {important : {$not : "$important"}}}
        ]);
        

        res.send(updateTask);
    }catch(e){
        res.status(500).json({
            message : "Error while updating the important tasks"
        })
    }
});

// Deletinng the tasks
router.delete('/deleteTask/:id', userAuthMiddleware, async(req,res) => {
    try{
        const deleteTask = await task.findByIdAndDelete(req.params.id);
        res.send(deleteTask);
    }catch(e){
        res.status(500).json({
            message : "Couldn't delete the task"
        })
    }
});

// Updating the tasks
router.put('/updateTask/:id', userAuthMiddleware, async(req,res) => {
    try{

        const updateTask = await task.findByIdAndUpdate(req.params.id,{
            title : req.body.title,
            description : req.body.description
        });

        res.send(updateTask);
    }catch(e){
        res.status(500).json({
            message : e.message
        })
    }
})

module.exports = router;