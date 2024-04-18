let tempo = parseInt(prompt("Digite o tempo que está em atraso: "));
let taxa = parseFloat(prompt("Digite o valor do juros: "));
let valor = parseFloat(prompt("Digite o valor da prestação: "));

let prestacao = valor + (valor*taxa/100) * tempo;
alert("O valor da sua prestação é de: "+prestacao);
