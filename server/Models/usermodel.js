const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({


    id:{
       type: String,
       required:true
    },
    password:{
        type:String,
        required:true,
        // minlength:8
    }
});

module.exports=mongoose.model('userinfos',userSchema);