const mongoose = require('mongoose')
const fs = require('fs')
const csv = require('csv-parser')
const { error } = require('console')

mongoose.connect('mongodb://127.0.0.1:27017/loja',
    {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    serverSelectionTimeoutMS : 20000
    }
)

// DEFINIR SCHEMA

const produtoSchema = new mongoose.Schema({
    codigo : String,
    descricao : String,
    valor : Number,
    estoque : Number
})

// criar model
const Produtos = mongoose.model('Produtos',produtoSchema);

// criar função!!
function lerCSVSalvarNoMongo(){
    const resultados = [];

    fs.createReadStream('exemplo - base.csv')
    .pipe(csv()) //transformar em objeto
    .on('data',(dados)=>{
        resultados.push(dados);
    })
    .on('end',()=>{
        Produtos.insertMany(resultados)
        .then(()=>{
            console.log("Dados inseridos com sucesso");
            mongoose.connection.close();
        })
    })
    //FALTA CODIGO
}