const alunosAvaliadosEmFrontend = [
    { nome: 'Gian', nota: 5 },
    { nome: 'André', nota: 9 },
    { nome: 'Daniel', nota: 7 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Gizele', nota: 4 },
    { nome: 'Gabriel', nota: 6 },
    { nome: 'Helena', nota: 8 },
    { nome: 'Marcia', nota: 5 },
    { nome: 'Marcos', nota: 6 },
    { nome: 'Nina', nota: 5 }
];

// Função para apresentação dos alunos aprovados:
const relatorioDosAlunosAprovados = (alunosAvaliadosEmFrontend) =>
    alunosAvaliadosEmFrontend.filter(alunosAvaliadosEmFrontend => alunosAvaliadosEmFrontend.nota >= 6);

const alunosQuePassaram = relatorioDosAlunosAprovados(alunosAvaliadosEmFrontend);
console.log("Estes foram os alunos que PASSARAM em Frontend.");
console.log(alunosQuePassaram);

// Função para apresentação dos alunos reprovados:
const relatorioDosAlunosReprovados = (alunosAvaliadosEmFrontend) =>
    alunosAvaliadosEmFrontend.filter(alunosAvaliadosEmFrontend => alunosAvaliadosEmFrontend.nota <= 5);

const alunosQueReprovaram = relatorioDosAlunosReprovados(alunosAvaliadosEmFrontend);
console.log("Estes foram os alunos que REPROVARAM em Frontend.");
console.log(alunosQueReprovaram);