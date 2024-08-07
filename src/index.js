import express from 'express';

const app = express();

//Mock

const tarefas = [
    {id: 1, titulo: "Estudar", descricao: "Estudar bancos de dados relacionais", status: "pendente"},
    {id: 2, titulo: "Cozinhar", descricao: "Fazer Marmita do dia", status: "pendente"},
    {id: 3, titulo: "Ler", descricao: "Ler capitulos de O Hobbit", status: "pendente"},
    {id: 4, titulo: "Exercicio fisico", descricao: "Sair para fazer trilha de Bike", status: "pendente"},
];

app.get('/', (req,res)=> {
    res.send('Hello World');
});

app.get('/tasks', (req,res)=> {
    res.send(tarefas);
});

export default app;
