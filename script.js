function adicionarVitoria() {}
function adicionarDerrota() {}
function adicionarEmpate() {}
var rafaNome = "Rafa";
var vitoriasRafa = 0;
var empatesRafa;
var paulo = {
  nome: "Paulo",
  vitoria: 0,
  derrota: 0,
  empate: 0,
  pts: 0
}; //objeto
var rafa = {
  nome: "Rafa",
  vitoria: 0,
  derrota: 0,
  empate: 0,
  pts: 0
};
//alert(paulo.vitoria);

document.getElementById('Tabela Jogadores');
elementoTabela.innerHTML = "
  <tr>
        <td>${paulo.nome}</td>
        <td>${paulo.empate}</td>
        <td>${paulo.derrota}</td>
        <td>${paulo.ponto}</td>
        <td>${paulo.vitoria}</td>
        <td><button 
"
function adicionarVitoria(jogador){
  jogador.vitoria++
  jogador.pontos=jogador.pontos+3
  console.log(jogador)
}








