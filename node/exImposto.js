//fazer uma funcao arrow que recebe um valor esse valor corresponde ao salario

//função retorna uma informação ao usuáreio baseado em critérios

//se o valor for menor ou igual a 1.500 retorna 0

//se o valor for maior que 1.500 e menor que 2.500 calcular 15% e retornar (valor * 0.15)

//se o valor for maior que 2500 calcular 25% e retornar (valor * 0.25)

//exibi na tela

//no casos de isento a frase - Seu salario [valor], e você é ISENTO.

//nos outros casos

//seu salario  [valor], o imposto é de [imposto] e seu salario final é [valor-imposto

const imposto = (numero) => {
    if(numero<=1500){
        return 0;
    }
    else if(numero>1500 && numero<=2500){
        return numero*0.15;
    }
    else {
        return numero*0.25; 
    }
}

let salario = 1500;
if(imposto(numero)==0){
    console.log(`Seu salario ${numero}, e vc é insento!`)
} 
else{
    console.log(`Seu salario é ${numero}, o imposto é de ${imposto(numero)} e seu salario final é ${numero-imposto}`)
}




