//alert('Informe os 4 valores')   ;
//
//let num1 = prompt("Qual foi o 1 numero");
//let num2 = prompt("Qual foi o 2 numero");
//let num3 = prompt("Qual foi o 3 numero");
//let num4 = prompt("Qual foi o 4 numero");
//
//let calc;
//
//calc = (Number(num1) + Number(num2) + Number(num3) + Number(num4)) / 4;
//
//alert(calc);


//let km = prompt("quantos km foram percorridos com o carro alugado?");
//
//let dia = prompt("quantos dias ele foi alugado?");
//
//let calcdia;
//let calckm;
//let calcfinal;
//
//calcdia = (Number(dia) * 90 );
//calckm = (Number(km) / 5 );
//calcfinal = (Number(calckm) + (Number(km)));
//
//alert('O valor total dos km é R$ '+ calcfinal)
//
//alert('O valor pelos dias são: R$ ' + calcdia);


//let km = prompt("Qual a distância que você deseja percorrer?");
//let passagem;
//
//if (Number(km) <= 200) {
//    passagem = Number(km) * 0.50;
//} else {
//    passagem = Number(km) * 0.45;
//}
//
//alert('O valor da passagem é: ' + passagem);

//alert('digite aqui suas 2 notas')
//
//let nota1 = prompt("digita a sua primeira nota")
//let nota2 = prompt("digita a sua segunda nota")
//
//let notamedia
//let divisor
//
//notamedia = (Number(nota1) + Number(nota2)) / 2;
//
//if(notamedia < 4.9) {
//    alert('reprovado')
//}else if (notamedia < 5 && notamedia < 6.9){
//    alert('recuperação')
//}else {
//    alert('aprovado')
//}
//
//alert(' ' + notamedia)

let nome = prompt("digite seu nome");
let salario = prompt("digite seu salario");
let ano = prompt("digite quantos anos você trabalha na empresa");

let three
let three2
let three3

if( ano <= 3) {
    three = salario / 100 
    three2 = three * 3
    three3 = Number(three2) + Number(salario)
    alert('Aumento de 3%: ' +Number(three3))
}else if (ano >= 4 && ano <= 10){
    three = salario / 100 
    three2 = three * 10
    three3 = Number(three2) + Number(salario)
    alert('Aumento de 10%: ' +Number(three3))
}else if (ano >= 11) {
    three = salario / 100 
    three2 = three * 20
    three3 = Number(three2) + Number(salario)
    alert('Aumento de 20%: ' +Number(three3))
}
