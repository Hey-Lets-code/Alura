import { Negociacao } from "./models/negociacao.js";
// adicionei .js no negociacao depois de rever o vídeo da aula
const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao);
negociacao.quantidade = 10000;
console.log(negociacao);   
// Teste
// Teste2