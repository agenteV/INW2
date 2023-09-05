const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017',
{userNewUrlParser : true, useUniFieldTopology : true, serverSelectionTimeoutMS : 10000});

const db = mongoose.connection

db.on('error', console.error.bind(console, 'concecction error'))
db.once('open')

//teste
