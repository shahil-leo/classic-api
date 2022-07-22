const express =require ("express")
const app=express();
const mongoose=require("mongoose")
const dotenv=require("dotenv")

dotenv.config();

// this is for the connection of the mongodb with the vscode and there is a some arrow function we need to understand 
// if it works then it will be DB connection successfull if not then it will be err
mongoose.connect( process.env.MONGO_URL)
.then(()=>console.log("DB Connection Successfull"))
.catch((err)=>{
    console.log(err);
});

// app.get("/api/test",()=>{
//     console.log("test is successfull")
// })



app.listen( 5000, ()=>{
    console.log("backend server is running")
})