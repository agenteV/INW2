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
const livrosSchema = new mongoose.Schema({
    descricao : String,
    ano : Number,
    valor : Number,
    estoque : Number,
});

const produtos = mongoose.model("Produtos",livrosSchema);
const ponteParaTerabitia = new produtos({
    descricao:"Ponte para Terabithia é uma obra de literatura infantil sobre a amizade de Leslie Burke e Jesse Aarons, dois estudantes do quinto ano, que criam um bosque mágico, o qual dão o nome de Terabithia, e onde vivem muitas aventuras.",
    ano: 1977,
    valor: 40,
    estoque: 100,
});
const harryPotter = new produtos({
    descricao:"Harry Potter e a Pedra Filosofal é o primeiro dos sete livros da série de fantasia Harry Potter, escrita por J. K. Rowling. O livro conta a história de Harry Potter, um órfão criado pelos tios que descobre, em seu décimo primeiro aniversário, que é um bruxo.",
    ano: 1997,
    valor: 50,
    estoque: 70,
});

console.log(ponteParaTerabitia.descricao);
console.log(ponteParaTerabitia.ano);
console.log(ponteParaTerabitia.valor);
console.log(ponteParaTerabitia.estoque);
ponteParaTerabitia.save()

console.log(harryPotter.descricao);
console.log(harryPotter.ano);
console.log(harryPotter.valor);
console.log(harryPotter.estoque);
harryPotter.save()
