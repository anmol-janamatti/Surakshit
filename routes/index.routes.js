const express=require('express')
const router=express.Router();
const authenticateToken = require('../middleware/auth');
router.get('/',(req,res)=>{
    res.render("landing")
})
router.get('/home', authenticateToken, (req, res) => {
  res.render('home', { user: req.user });
});


module.exports=router;