"use strict";

var alunosAvaliadosEmFrontend = [{
  nome: 'Gian',
  nota: 5
}, {
  nome: 'André',
  nota: 9
}, {
  nome: 'Daniel',
  nota: 7
}, {
  nome: 'Pedro',
  nota: 8
}, {
  nome: 'Gizele',
  nota: 4
}, {
  nome: 'Gabriel',
  nota: 6
}, {
  nome: 'Helena',
  nota: 8
}, {
  nome: 'Marcia',
  nota: 5
}, {
  nome: 'Marcos',
  nota: 6
}, {
  nome: 'Nina',
  nota: 5
}];

// Função para apresentação dos alunos aprovados:
var relatorioDosAlunosAprovados = function relatorioDosAlunosAprovados(alunosAvaliadosEmFrontend) {
  return alunosAvaliadosEmFrontend.filter(function (alunosAvaliadosEmFrontend) {
    return alunosAvaliadosEmFrontend.nota >= 6;
  });
};
var alunosQuePassaram = relatorioDosAlunosAprovados(alunosAvaliadosEmFrontend);
console.log("Estes foram os alunos que PASSARAM em Frontend.");
console.log(alunosQuePassaram);

// Função para apresentação dos alunos reprovados:
var relatorioDosAlunosReprovados = function relatorioDosAlunosReprovados(alunosAvaliadosEmFrontend) {
  return alunosAvaliadosEmFrontend.filter(function (alunosAvaliadosEmFrontend) {
    return alunosAvaliadosEmFrontend.nota <= 5;
  });
};
var alunosQueReprovaram = relatorioDosAlunosReprovados(alunosAvaliadosEmFrontend);
console.log("Estes foram os alunos que REPROVARAM em Frontend.");
console.log(alunosQueReprovaram);