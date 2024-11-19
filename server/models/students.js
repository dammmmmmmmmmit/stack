const mongoose = require('mongoose');

const studetSchema = new mongoose.Schema(
    {
        name:{type:String, required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String, required:true},
        college:{type:String,required:true},
        gradYear:{type:Number,required:true},
        leetcodeUsername:{type:String, required:true},
        codeforceUsername:{type:String},
        scores:{
          leetcode:{
            total:{type:Number,default:0},
            hard:{type:Number,default:0},
            medium:{type:Number,default:0},
            easy:{type:Number,default:0},
          },
          codeforces:{
            rating:{type:Number,default:0},
            problemsolved:{type:Number,default:0},
          },
        },
        profileVisibilityScore:{type:Number,default:0},
        projects:[
            {
                title:{type:String},
                link:{type:String,},
                description:{type:String},
            },
        ],
        jobPreferences:{type:String},
    },
    {timestamps:true}
);

module.exports = mongoose.model('students',studetSchema);