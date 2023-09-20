function nomeComIdade(nome,idade){
    if(idade == undefined){
        console.log('Seu nome é '+nome)
    }
    else{
        console.log(`O seu nome é ${nome}, e voce tem ${idade}`)
    }
}


//nomeComIdade("Epaminondas")
//nomeComIdade("Vitor",17)

function repetirFrase(frase,n){
    for(let x=1;x<=n;x++){
        console.log(frase+""+x)
    }
}
repetirFrase("SILENCIO POR FAVOR",10)