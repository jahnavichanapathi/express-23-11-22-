const express=require("express")
const app=express()
const port=4000
const cors=require("cors")
const students=require("./data.js")
const emp={id:1,name:"user1",position:"ceo"}

app.use(cors())

app.get("/",(req,res)=>{
	res.send(" server is ready ")
})
app.get("/user",(req,res)=>{
	res.send("how are you")
})
app.get("/emp",(req,res)=>{
	res.json(emp)
})
app.get("/students",(req,res)=>{
	res.json(students)
})
app.listen(port,()=>console.log("server started"))