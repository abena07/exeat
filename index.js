const express =require('express')
const app = express();
const mongoose=require('mongoose')
const studentRouter=require('./controllers/student')
const config = require('./helpers/config')
const cors=require("cors")


app.use(express.json())
app.use(cors())

mongoose.connect(config.MONGODB_URI,  config.MONGOOSE_OPTIONS,{
    socketTimeoutMS: 60000,
    keepAlive: true,
    reconnectTries: 1000
})
.then(()=>{
    console.log("Successfully connected to MongoDB")
})           

.catch((err)=>{
    console.log("Some problem occurred",err)
})

    
app.use( '/student',studentRouter)

app.listen(config.PORT, () =>
  console.log(`Express app is working on PORT: ${config.PORT}`),
);