import express from 'express';

const app = express();
app.use(express.json());

//Mock de Dados
const tarefas = [
    {id: 1, titulo: "Estudar", descricao: "Estudar bancos de dados relacionais", status: "pendente"},
    {id: 2, titulo: "Cozinhar", descricao: "Fazer Marmita do dia", status: "pendente"},
    {id: 3, titulo: "Ler", descricao: "Ler capitulos de O Hobbit", status: "pendente"},
    {id: 4, titulo: "Exercicio fisico", descricao: "Sair para fazer trilha de Bike", status: "pendente"},
];


//Lista todas as atividades
app.get('/tasks', (req,res)=> {
    res.status(200).send(tarefas);
});

//Insere uma nova atividade na lista de atividades, através do corpo da requisição.
app.post('/tasks', (req,res)=> {
    tarefas.push(req.body)
    res.status(200).send('Atividade criada');
});

export default app;
