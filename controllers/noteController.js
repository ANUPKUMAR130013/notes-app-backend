const Note=require("../models/Note");

exports.createNote=async(req,res)=>{

const note=await Note.create({

title:req.body.title,

content:req.body.content,

user:req.user.id

});

res.json(note);

};

exports.getNotes=async(req,res)=>{

const notes=await Note.find({

user:req.user.id

});

res.json(notes);

};

exports.updateNote=async(req,res)=>{

const note=await Note.findByIdAndUpdate(

req.params.id,

req.body,

{new:true}

);

res.json(note);

};

exports.deleteNote=async(req,res)=>{

await Note.findByIdAndDelete(req.params.id);

res.json({

message:"Deleted"

});

};