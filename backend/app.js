
const express = require("express")
const { route } = require("./routes/userroute")
const app = express()
let port = 3005


app.use(express.json())
app.use("/auth" , route)

app.get("/" , (req,res)=>{
    res.send('this is the root api')
})

app.listen(port , ()=>{
    console.log(`server start in http://localhost:${port}` )
})



// routes :

// example : veg , non-veg
 
// http://localhost:3005/veg/tomoto
// http://localhost:3005/veg/bringer
// http://localhost:3005/veg/potato


// app.get("veg/tomoto" ,()=>{})
// app.get("veg/bringer" ,()=>{})
// app.get("veg/potato" ,()=>{})

// express.Router()

// mvc architecture

// m - module  (database logics)
// v - views   (html pages )
// c - controllers  (main logic)



