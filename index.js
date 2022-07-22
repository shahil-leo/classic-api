const express =require ("express")
const app=express();
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const userRoute=require("./routes/users")

dotenv.config();

// this is for the connection of the mongodb with the vscode and there is a some arrow function we need to understand 
// if it works then it will be DB connection successfull if not then it will be err
mongoose.connect( process.env.MONGO_URL)
.then(()=>console.log("DB Connection Successfull"))
.catch((err)=>{
    console.log(err);
});

app.use(express.json());
// we need to see the code response in json formate
app.use("/api/users",userRoute)
// this is the url that we use everytime when we enter a website in front if we want to added another things then we have a thing called user router
// userRouter will give us the extended url for other things that should be done

app.listen( 5000, ()=>{
    console.log("backend server is running")
})