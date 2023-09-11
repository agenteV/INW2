//requisitando o pacote mongoose
const mongoose = require('mongoose');
 
//criar chave de conexão
mongoose.connect('mongodb://127.0.0.1:27017/escola',
    {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    serverSelectionTimeoutMS : 20000
    }
)

//executando a conexão
const db = mongoose.connection;

//codigos de teste da conexão
db.on('error', console.error.bind(console,'connction error :'))
db.once('open', function(){
    console.log("Conexao com mongoDB realizada")
})

//Segunda fase
const alunoSchema = new mongoose.Schema({
    matricula : String,
    nome : String,
    idade : Number,
    turma : String
});

const Alunos = mongoose.model('Alunos',alunoSchema)

const carlos = new Alunos({
    matricula : 'rm501',
    nome: 'Carlos Silva',
    idade: 18,
    turma: '2mib'
});
carlos.save()

const maria = new Alunos({
    matricula : 'rm510',
    nome: 'Maria Jose',
    idade: 17,
    turma: '2mia'
});
maria.save()
 

