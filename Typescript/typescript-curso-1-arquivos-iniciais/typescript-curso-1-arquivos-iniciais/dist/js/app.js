import { Negociacao } from "./models/negociacao";

const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao);
negociacao.quantidade = 10000;
console.log(negociacao);   
// Teste
// Teste2