let inf = "Informe o valor total da compra";
let vl = prompt("Qual foi o valor?");
let fp = prompt("Qual a forma de pagamento (crédito, débito ou dinheiro)?");

let valorFinal;

if (fp === "crédito" || fp === "cheque" || fp === "credito" || fp === "Credito" || fp === "Cheque") {
    valorFinal = Number(vl) + (Number(vl) * 0.1); // Acrescenta 10% para crédito ou cheque
} else if (fp === "débito" || fp === "dinheiro" || fp === "Dinheiro" ) {
    valorFinal = Number(vl) - (Number(vl) * 0.1); // Desconta 10% para débito ou dinheiro
} else {
    alert("Forma de pagamento inválida. Por favor, insira crédito, débito ou dinheiro.");
}

if (valorFinal !== undefined) {
    alert(`O valor final a pagar é: ${valorFinal.toFixed(2)}`);
}