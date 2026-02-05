// Template String - Exemplos Práticos

// ====== 1. Interpolação Básica ======
const nome = "João";
const idade = 25;
const mensagem = `Meu nome é ${nome} e tenho ${idade} anos.`;
console.log(mensagem);

// ====== 2. Expressões Matemáticas ======
const a = 10;
const b = 5;
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);

// ====== 3. String Multilinha ======
const poesia = `
O silêncio é ouro,
A palavra é prata.
A sabedoria é gema,
A verdade é joia rara.
`;
console.log(poesia);

// ====== 4. Chamando Funções ======
function cumprimentar(nome) {
  return `Olá, ${nome}!`;
}

console.log(`${cumprimentar("Maria")}`);

// ====== 5. Condicionais ======
const nota = 85;
const resultado = `Você foi ${nota >= 60 ? 'aprovado' : 'reprovado'}!`;
console.log(resultado);

// ====== 6. Objetos ======
const usuario = {
  nome: "Alice",
  email: "alice@email.com",
  ativo: true
};

console.log(`Usuário: ${usuario.nome}, Email: ${usuario.email}`);

// ====== 7. Arrays ======
const frutas = ["maçã", "banana", "laranja"];
console.log(`Frutas: ${frutas.join(", ")}`);

// ====== 8. Loop com Template String ======
frutas.forEach((fruta, index) => {
  console.log(`${index + 1}. ${fruta}`);
});

// ====== 9. Template String com Cálculo ======
const preco = 100;
const desconto = 0.15;
const precoFinal = preco * (1 - desconto);
console.log(`
Preço original: R$ ${preco}
Desconto: ${(desconto * 100).toFixed(0)}%
Preço final: R$ ${precoFinal.toFixed(2)}
`);

// ====== 10. Exemplo Prático - Formulário ======
const dados = {
  nome: "Carlos",
  email: "carlos@email.com",
  profissao: "Desenvolvedor"
};

const relatorio = `
===== RELATÓRIO =====
Nome: ${dados.nome}
Email: ${dados.email}
Profissão: ${dados.profissao}
Data: ${new Date().toLocaleDateString('pt-BR')}
====================
`;
console.log(relatorio);
