const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Note Title is required 👹👹👹👹"],
        minlength: [3, "Title must be at least 3 characters 👻👻👻👻"]
    },
    content:{
        type:String,
        required:[true, "content is required 👹👹👹👹"],
        minlength: [3, "content too short 👻👻👻👻"]
    },
    isImportant:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

module.exports = mongoose.model('Note', NoteSchema)