const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/agenda',
    {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    serverSelectionTimeoutMS : 20000
    }
)

const db = mongoose.connection;

db.on('error', console.error.bind(console,'connction error :'))
db.once('open', function(){
    console.log("Conexao com mongoDB realizada")
})

//

const contatoSchema = new mongoose.Schema({
    numero : Number,
    nome : String,
    idade : String,
    email : String
})

const Contatos = mongoose.model('Contatos',contatoSchema)

const Epaminondas = new Contatos({
    numero : 1,
    nome: 'Epaminondas',
    idade: 17,
    email : 'epa@gmail.com'
});
Epaminondas.save()

const Carla = new Contatos({
    numero : 2,
    nome: 'Carla',
    idade: 18,
    email : 'carla@gmail.com'
});
Carla.save()

