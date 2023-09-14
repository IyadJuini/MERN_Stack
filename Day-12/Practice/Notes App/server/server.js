const express = require("express");
const cors = require('cors')
const app = express();

// GLOBAL VARIABLES
const PORT = 8000;
const DB = "notesApp_db";


app.use(express.json(), express.urlencoded({ extended: true }), cors());
require('./config/mongoose.config')(DB)
require('./routes/notes.routes')(app)


app.listen(PORT, () => console.log(`🚀🚀🚀🚀 >>> SERVER IS RUNNING ON PORT ${PORT} <<< 🚀🚀🚀`))
