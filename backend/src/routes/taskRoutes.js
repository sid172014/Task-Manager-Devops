const express = require('express');
const userAuthMiddleware = require('../middleware/middleware');
const { task} = require('../db/database');

const router = new express.Router();

router.get('/', userAuthMiddleware, async(req,res) => {
    res.send("Hello world this is Great");
});

router.post('/create', userAuthMiddleware, async(req,res) => {
    const taskBody = {...req.body, owner : req.user._id};
    const newTask = new task(taskBody);
    await newTask.save();
    res.send(newTask);
})
module.exports = router;