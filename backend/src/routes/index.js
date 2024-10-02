// Main router
const express = require('express');
const router = new express.Router();

// Importing other routes
const userRouter = require('./userRoutes');

//User Router
router.use('/user', userRouter);

module.exports = router;