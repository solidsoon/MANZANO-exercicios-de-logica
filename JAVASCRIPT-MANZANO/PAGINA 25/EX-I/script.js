let cota_dolar = parseFloat(prompt("Digite o valor da cotação do dolar: "));
let dolar = parseFloat(prompt("Digite a quantidade de dólares que você quer converter: "));

let real = parseFloat(cota_dolar * dolar);
alert("Sua conversão de dolar para real foi de: R$ "+real);
