const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const User =require("./Models/usermodel");
const bcrypt=require('bcryptjs');


//signup handle
router.post('/signup',(req,res,next)=>{
    
// appending values of id and password in variable
    console.log("here");
    
    const {id,password}=req.body;
    User.findOne({id:id}).then(user=>{
        if(user){
            res.send("This id is already exist");
        }
        else
        {
            const user=new User({
                id:req.body.id,
                password:req.body.password
            });

            console.log(user);
            
            //hash password
            bcrypt.genSalt(10,(err,salt)=>
            bcrypt.hash(user.password, salt,(err,hash)=>{
                if(err) throw err;

                //setting password to hashed
                user.password=hash;

                //saving user
                user.save()
                .then(user=>{
                    
                    res.status("201").send("success");
                })
                .catch(err=>console.log(err));
            }))
           
        }
        
    })
})

// login handel

router.post('/login',(req,res)=>{
    
    const {id,password}=req.body;
    User.findOne({id:id})
             .then(user => {  
            // encrypting password
                bcrypt.compare(password,user.password)
                            .then(correct =>{
                                // console.log(correct)
                                if(correct){
                                    // res.status("201").send("success");
                                    res.status("200").json({
                                        success : true
                                    })
                                }
                                else{
                                    res.status(404).json({failed:'Invalid user credentials'});
                                }
                            })
                            .catch(err => console.log("error generating token "+err));
             })

            console.log("gdgf");
})


module.exports=router;