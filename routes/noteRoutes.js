const express=require("express");

const router=express.Router();

const auth=require("../middleware/authMiddleware");

const note=require("../controllers/noteController");

router.post("/",auth,note.createNote);

router.get("/",auth,note.getNotes);

router.put("/:id",auth,note.updateNote);

router.delete("/:id",auth,note.deleteNote);

module.exports=router;