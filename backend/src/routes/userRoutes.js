const express = require('express');
const jwt = require('jsonwebtoken');

const router = new express.Router();

// Importing the database
const {users} = require('../db/database');
const userAuthMiddleware = require('../middleware/middleware');
router.get('/', async (req,res) => {
    res.send("hello world the backend api is working");
});

// Sign-up route
router.post("/signup", async (req,res) => {
    try{
        const user = new users(req.body);
        
        await user.generateAuthToken();
        await user.save();
        res.status(201).json({
            message : "Successfully created User!",
            token : user.token
        });
        
    }catch(e){
        res.status(500).json({
            error : e.message
        })
    }
})

// Sign-In Route
router.post('/signin', async (req,res) => {
    try{
        const userInfo = req.body;
        const user = await users.findOne({
            email : userInfo.email
        });

        if(userInfo.password === user.password){
            await user.generateAuthToken();
            await user.save();
            res.json({
                message : "Logged in Successfully",
                token : user.token
            });   
        }else{
            throw new Error("User credentials are wrong!!");
        }
    }catch(e){
        res.status(401).json({
            error : e.message
        })
    }
});


// Read tasks
router.get('/tasks', userAuthMiddleware, async(req,res) => {
    res.send(req.user);
});

module.exports = router;