const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    email:String,
    password:String,

})
const userModel=mongoose.model('user',userSchema)
module.exports=userModel
console.log("schema-ok")