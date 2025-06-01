const express=require("express")
const app = express()
const userRouter=require('./routes/user.routes')
const dotenv=require('dotenv');
dotenv.config();
const connection=require('./.config/db')
const userModel=require('./models/user')
const indexRouter=require('./routes/index.routes')
const cookieParser=require('cookie-parser')









app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static('public'));



app.use('/',indexRouter)
app.use('/user',userRouter) 



const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server is running on port${PORT}`);
})
console.log("server started!!!!")