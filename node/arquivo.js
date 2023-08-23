const {error} = require("console");
let {readFile,writeFile} = require('fs');

readFile("arquivo.txt","utf-8",(error,texto)=>{
    if(error){
        throw error;
    } else {
        console.log(texto)
    }
})

writeFile("arquivo.txt","texto feito por um writeFile",(error)=>{
    if(error){
        throw error;
    } else{
        console.log("ESCREVEU EM FORMA CORRETA")
    }
})