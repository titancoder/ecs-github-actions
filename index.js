const express=require("express")
const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).json({"status":0,"message":"success"})
})

app.get("/health",(req,res)=>{
    res.status(200).json({})
})

app.listen(3000,()=>{
    console.log("Server listening on 3000");
})