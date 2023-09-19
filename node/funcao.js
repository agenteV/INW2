//criação da função
function escreverNoConsole(){
    console.log("Escrevendo na tela a função!!")
}

//execução na função
escreverNoConsole();


//outro exemplo
const textoNoConsole = function(){
    console.log("Segundo exemplo, escrevendo no console")
}
textoNoConsole();

//outro exemplo 2
const textoPorParametro = function(texto){
    console.log(texto)
}
textoPorParametro("Terceiro texto, este texto é de parametro")

//exemplo 3
const textoUsandoArrow = (texto) => console.log(texto)
textoUsandoArrow("Quato texto, e o santos ganhou de virada!")

const mostrarParImpar = (numero) => {
    if(numero<0){
        console.log(numero,"O numero digitado é negativo")
    }
    else if(numero == 0){
        console.log(numero,"O número digitado é neutro")
    }
    else if((numero%2)==0){
        console.log(numero,"O número digitado é par")
    }
    else{
        console.log(numero,"O numero digitado é impar")
    }
}
mostrarParImpar(1352)

function escreveLinha(tamanho=80){
    let linha
    for(let x=1; x<tamanho; x++){
        linha = linha + "-"
    }
    console.log(linha)
}
escreveLinha(80)