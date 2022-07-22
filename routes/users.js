const router=require("express").Router();

// when we type the localhost:then the address of the index.js the nthe usertest 
// it will give you the you are a killaid test
router.get("/usertest",(req,res)=>{
    res.send("You are a killadi")
})

router.post("/userposttest",(req,res)=>{
    const username=req.body.username
    console.log(username)
    res.send("Your username is "+ username)
})

module.exports=router;