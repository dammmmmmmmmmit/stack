const express = require('express');
const cors = require('cors');
const dotenv =require('dotenv');
const connectDB = require(`./config/database`);

dotenv.config();

const app =express();

app.use(cors());
app.use(express.json());

connectDB();

app.get('/',(req,res)=>{
    res.send('server running balle balle');
});
    
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
});