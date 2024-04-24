let candidato1 = parseInt(prompt("Digite o total votos do primeiro candidato: "));
let candidato2 = parseInt(prompt("Digite o total votos do segundo candidato: "));
let candidato3 = parseInt(prompt("Digite o total votos do terceiro candidato: "));

let total_votos = candidato1 + candidato2 + candidato3;
alert("Essa é a soma de todos os votos: "+total_votos);

let validos = parseInt(prompt("Digite o totoal de votos nulos: "));
let brancos = parseInt(prompt("Digite o totoal de votos nulos: "));
let nulos = parseInt(prompt("Digite o totoal de votos nulos: "));

let total_validos = (validos / total_votos) * 100; 
let total_brancos = (brancos / total_votos) * 100;  
let total_nulos = (nulos / total_votos) * 100 ; 

alert("Esse é a porcentagem de votos válidos: "+total_validos+"%");
alert("Esse é a porcentagem de votos válidos: "+total_brancos+"%");
alert("Esse é a porcentagem de votos válidos: "+total_nulos+"%");
