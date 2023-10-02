const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ong',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    serverSelectionTimeoutMS : 20000
});

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Falha na conexâo!!'))

db.once('open', ()=>{
    console.log("Conexão com o banco de dados realizada com sucesso!!")
})

//
const usuariosSchema = new mongoose.Schema({
    email : String,
    senha : String
});

const Usuarios = mongoose.model('Usuarios',usuariosSchema) 

//
Usuarios.insertMany([
    {email : 'paulinho@gmail.com', senha: 'pauloSantos'},
    {email : 'elisaSanches@gmail.com', senha: 'elisaSP'},
    {email : 'ml@gmail.com', senha: 'santosMaior'}
])

async function findUsuarios(){
    try{
        const usuario = await Usuarios.find({});
        console.log('Usuarios:',usuario)
    }
    catch(error){
        console.error('Alunos não encontrados: ',error)
    }
}
findUsuarios();