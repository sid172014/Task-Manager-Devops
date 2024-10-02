const express = require("express");
const cors = require('cors');
require('dotenv').config();

const app = express();

// Using the important middlewares
app.use(cors());
app.use(express.json());

// Importing Main Route
const mainRouter = require('./routes/index');

app.use('/api/v1',mainRouter);

app.listen(process.env.PORT , () => {
    console.log("Listening on port " + process.env.PORT);
})

