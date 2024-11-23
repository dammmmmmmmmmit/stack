const express = require('express');
const cors = require('cors');
const dotenv =require('dotenv');
const connectDB = require(`./config/database`);
const student = require('./models/students');
const company = require('./models/company');

dotenv.config();

const app =express();

app.use(cors());
app.use(express.json());

connectDB();

app.get('/',(req,res)=>{
    res.send('server ke balle balle');
});
    
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
});

app.post('/api/test/student',async(req,res)=>{
    try{
        const student = new Student({
            name:'abhi doe',
            email:'abhidoe@muje.com',
            password:'passstudent',
            college:'abc uni',
            gradYear: 2019,
            leetcodeUsername:'abhidoe',
            codeforceUsername:'abhidoere',
            jobPreferences:'Backend Dev',
        });
        await student.save();
        res.status(201).json(student);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});

app.post('/api/test/company',async(req,res)=>{
    try{
        const company = new Company({
            name: 'tcomp',
            email:'tcomp@email.com',
            password:'passtcomp',
            contactNumber:'9999999999',
            website:'www.tcomp.com',
        });
        await company.save();
        res.status(201).json(company);
    } catch(error){
        res.status(400).json({error:error.message});
    }
});