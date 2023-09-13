const mongoose = require('mongoose')
const PersonSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:[true, "First Name is required 👻👻👻"],
        minlength: [3, "First Name must be greater than 3 characters"]
    },
    lastName:{
        type:String,
        require:[true, "Last Name is required 👹👹👹"],
        minlength: [3, "Last Name must be greater than 3 characters"]
    },
    age:{
        type : Number ,
        require:[ true,"{PATH}Age is Required 😡😡😡" ],
        min: 1,
        max: 120
    },
    isFunny:{
        type:Boolean,
        default:false
    }
},{ timestamps: true})

const Person = mongoose.model('Person', PersonSchema);
module.exports = Person;