const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/exemplo',
{useNewUrlParser : true, 
useUnifiedTopology : true, 
serverSelectionTimeoutMS : 10000});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'concecction error'))

db.once('open', function(){
    console.log("Estamos logados no mongodb")
});

//

const pessoasSchema = new mongoose.Schema({
    nome : String,
    idade : Number,
    profissao : String,
});

const pessoas = mongoose.model("Pessoa",pessoasSchema);
const marcos = new pessoas({
    nome:"Marcos",
    idade: 25,
    profissao: "Programador",
});
const vitor = new pessoas({
    nome:"Vitor",
    idade: 17,
    profissao: "Ator",
});

console.log(vitor.nome);
console.log(vitor.idade);
console.log(vitor.profissao);
vitor.save()

console.log(marcos.nome);
console.log(marcos.idade);
console.log(marcos.profissao);

marcos.save()




