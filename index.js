'use strict';
const express =require("express")
const app =express()





app.get("/" , (req,res)=>{

res.send("welcome to Aws deployment")



})
app.listen(8080 , ()=>{
console.log("server is running on port 8080");


})