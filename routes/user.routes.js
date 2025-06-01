const express=require('express')
const router=express.Router();
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const usermodel= require('../models/user')


router.get('/register',(req,res)=>{
    res.render('register')
})

router.post('/register',async(req,res)=>{
    const {username,email,password}=req.body;

    const hashPass=await bcrypt.hash(password,10);
    const new_user=await usermodel.create(
       { username,
        email,
        password:hashPass}
    )

    res.redirect('/user/login');
})

router.get('/login',(req,res)=>{
    res.render("login")
})
router.post('/login',async(req,res)=>{
     const {username,password}=req.body;
    
     const user=await usermodel.findOne({
        username:username
     })
     if(!user){
        return res.status(400).json({
            message:'username or password is incorrect'
        })
     }
     const isMatch= await bcrypt.compare(password,user.password)
     if(!isMatch){
        return res.status(400).json({
            message:'username or password is incorrect'
        })
     }
    const token = jwt.sign({
        userId:user._id,
        email:user.email,
        username:user.username
    },process.env.JWT_SECRET)
      res.cookie('token',token)
    // res.send("user logged in succesfully!!!")
    res.redirect('/home');
}
)
    
  
module.exports=router;
    