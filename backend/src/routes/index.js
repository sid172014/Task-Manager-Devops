// Main router
const express = require('express');
const router = new express.Router();

// Importing other routes
const userRouter = require('./userRoutes');
const taskRouter = require('./taskRoutes');

//User Router
router.use('/user', userRouter);
//Task Router
router.use('/task', taskRouter);

module.exports = router;