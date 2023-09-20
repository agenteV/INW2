function somaDois(numero1,numero2){
    return (numero1+numero2);
}
console.log("A soma desses dois valores é "+somaDois(5,7))
console.log("A soma desses dois valores é",somaDois(5,7))

const parImpar = (numero) =>{
    if(numero < 0){
        return "Negativo"
    }
    else if(numero == 0){
        return "Neutro"
    }
    else if((numero%2)==0){
        return "par"
    }
    else {
        return "impar"
    }
}
console.log(parImpar(5))
console.log(parImpar(2))
console.log(parImpar(0))
console.log(parImpar(-1))

