const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv =require('dotenv');

dotenv.config();

const app =express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    req.send('server running');
});

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(() =>{
        console.log('mongo connected');
        app.listen(PORT,()=>{
            console.log('server on http://localhost: ${PORT}');
        });
    })
    .catch(console.error);
    