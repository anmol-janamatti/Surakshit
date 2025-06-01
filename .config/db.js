const mongoose= require('mongoose')
const connections=mongoose.connect(process.env.mongo_uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("connected to database")
});

module.exports=connections