const User=require("../models/User");

const bcrypt=require("bcryptjs");

const jwt=require("jsonwebtoken");

exports.register=async(req,res)=>{

try{

const{name,email,password}=req.body;

const exist=await User.findOne({email});

if(exist)
return res.json({message:"User Exists"});

const hash=await bcrypt.hash(password,10);

const user=await User.create({

name,
email,
password:hash

});

res.json(user);

}catch(err){

res.status(500).json(err);

}

};

exports.login=async(req,res)=>{

try{

const{email,password}=req.body;

const user=await User.findOne({email});

if(!user)
return res.json({
message:"Invalid Credentials"
});

const match=await bcrypt.compare(password,user.password);

if(!match)
return res.json({
message:"Invalid Credentials"
});

const token=jwt.sign(

{id:user._id},

process.env.JWT_SECRET,

{expiresIn:"1d"}

);

res.json({
token
});

}catch(err){

res.status(500).json(err);

}

};