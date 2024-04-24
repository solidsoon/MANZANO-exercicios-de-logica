let salario = parseFloat(prompt("Digite o salário do seu funcionário: "));
let reajuste = parseFloat(prompt("Digite o valor do reajuste no salário do seu funcionário em porcentagem: "));

let resultado = salario*reajuste

alert("Esse é o valor do reajuste "+resultado);

resultado = salario + resultado;
alert("Seu salário com reajuste: "+resultado);