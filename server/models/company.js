const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true, unique:true},
        password:{type:String,required:true},
        contactNumber:{type:Number,required:true},
        website:{type:String,},
        jobOpening:[
            {
                title:{type:String},
                description:{type:String},
                requiredSkills:[String],
                minScore:{type:Number},
            },
        ],
    },
    {timestamps:true}
);

module.exports=mongoose.model('company',CompanySchema);