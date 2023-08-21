const leia = require("prompt-sync")()

//RAUL
console.log("\nBEM-VINDO À TECFIT\n");
let codigo = ["COD01","COD02","COD03","COD04","COD05","COD06","COD07","COD08","COD09","COD10",]
let servico = ["Treinamento Esportivo                ", "Apoio Psicológico                ", "Assessoria Nutricional               ", "Acesso a Instalações de Treinamento", "Programas de Desenvolvimento Físico", "Apoio Educacional               ", "Mentoria e Aconselhamento Profissional", "Assessoria de Carreira               ", "Oportunidades de Competição         ", "Programas de Conscientização       "]
let valorUnitarioDoacao = [10, 15, 20, 25, 30, 35, 40, 45, 50 ,55]
let movimento = [0,0,0,0,0,0,0,0,0,0,]
let carrinho = []
let servicosCarrinho = 10

console.log("CÓDIGO\t\tSERVIÇO\t\t\t\t\t\tVALOR-UNITARIO")

//Vitor D

for (let i = 0; i < codigo.length; i++) {
    console.log(codigo[i]+"\t\t"+servico[i]+"\t\t"+valorUnitarioDoacao[i]);
    }

function adicionarCarrinho(codigos){
  let compras = codigo.indexOf(codigos);
  if (compras !== -1) {
    if (carrinho.length < servicosCarrinho){
      carrinho.push(compras);
      console.log(`Serviço "${servico[compras]}" adicionado ao carrinho.`);
    } else {      
      console.log("O carrinho está cheio. Não é possível adicionar mais serviços.");
}
} else { 
  console.log("Código de serviço inválido.");
}
}

function calcularValorTotal(){
  let total = 0;
    for (let compras of carrinho) {
      total += valorUnitarioDoacao[compras];
}
      console.log(`Total da doação é de: R$${total}`);
}

//Mateus D
 
function programaPrincipal() {
  while (true) {
    let codigoSelecionado = leia("Digite o código do serviço desejado: ");
      adicionarCarrinho(codigoSelecionado);
    let continuar = leia("Deseja adicionar mais serviços? (S/N): ");
      if (continuar.toUpperCase() !== "S") {

  calcularValorTotal();
    carrinho.length = 0;
      console.log("\nVolte sempre!\n");
}
}
}

 

programaPrincipal();