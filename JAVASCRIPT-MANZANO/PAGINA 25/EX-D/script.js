let tempo = parseInt(prompt("Digite o tempo gasto na viagem: "));
let velocidade = parseInt(prompt("Digite a velocidade média gasta na viagem: "));

let distancia = (tempo * velocidade);
let litros_usados = (distancia / 12);

alert("Essa foi a distancia percorrida: "+distancia+" Km");
alert("Foi usado "+litros_usados+" litros na viagem.");
