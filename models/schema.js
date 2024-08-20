import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
    title: { type:String, default: "Untitled"},
    note: { type:String, default: "", required: true}
});

export const Note = mongoose.model('Note', NoteSchema);