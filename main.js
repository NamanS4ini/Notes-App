import express from "express";
import ejs from "ejs";
import mongoose from "mongoose";
import { Note } from './models/schema.js';

const app = express()
const port = 3000

app.use(express.static('Public'))
app.use(express.json());
app.set("view engine", "ejs");


//put this is post request that is posted by script.js given title and note as function argument and for love of god remember what were you doing plz 
mongoose.connect("mongodb://127.0.0.1:27017/Notes");


app.get("/", (req, res) => {
  res.render("index")
})
app.post("/add", (req, res) => {
  const data = req.body;
  data.title.trim() === "" ? data.title = "Untitled" : data.title = data.title;
  let note = new Note(data)
  note.save()
    .then(() => {
      res.status(200).json(note._id);
    })
    .catch((err) => {
      res.status(500).send("Error: Internal Server Error");
    })
})
app.get("/show", (req, res) => {
  Note.find({})
    .then(notes => {
      res.json(notes);
    })
    .catch(err => {
      console.error(err);
    });
})

app.put("/update", (req, res) => {
  let updated = req.body
  if (!updated.note || updated.note.trim() === "") { 
    // If it's empty, return a 400 status with an error message
    return res.status(400).send("Error: Note cannot be empty.");
  }

  Note.findByIdAndUpdate(updated.id, { title: updated.title, note: updated.note })
    .then(() => {
      res.status(200).send("Success!");
    })
    .catch(() => {
      res.status(500).send("Error: Internal Server Error");
    })

})

app.delete("/delete", (req, res) => {
  try {
    let id = req.body

    Note.findByIdAndDelete(id.id)
    .then(deletedNote => {
      if (deletedNote) {
        res.status(200).send("Success!");
      } else {
        res.status(404).send("note not found!");
      }
    })
  

  } catch (error) {

    res.status(500).send("Error: Internal Server Error");
  }

})

app.listen(port, () => {
  console.log("Example app listening on port " + port)
}) 