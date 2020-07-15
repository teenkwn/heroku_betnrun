const express= require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080

mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true});
app.use(bodyParser.urlencoded({
    extended:true
}));

const userSchema = {
    fullName : String,
    email : String,
    phoneNumber: Number,
}
const User = mongoose.model("User",userSchema);

app.post("/",function(req,res){
    const user = new User ({
        fullName: req.body.fullName,
        email: req.body.email,
        phoneNumber:req.body.phoneNumber,
    })
    user.save();
    res.send("Thankyou For Register ")
})
app.get("/",function(req,res){
    res.send("Hello")
})

app.listen(PORT,function(){
    console.log("start server on port ${PORT}");
})