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

//Lista todas as tasks
app.get('/tasks', (req,res)=> {
    res.status(200).send(tarefas);
});

//Lista uma tarefa especifica
app.get('/tasks/:id', (req,res)=>{
    res.json(buscaTaskPorId(req.params.id));
});

//Cria uma nova Task
app.post('/tasks', (req,res)=> {
    tarefas.push(req.body)
    res.status(200).send('Atividade criada');
});

//deleta task
app.delete('/tasks/:id', (req,res)=> {
    let index = buscaIndexDaTask(req.params.id);
    tarefas.splice(index,1)
    res.send(`Atividade com ID ${req.params.id} Exluida com sucesso`);
})

//Atualiza Task
app.put('/tasks/:id', (req,res)=> {
    let index = buscaIndexDaTask(req.params.id);
    tarefas[index].titulo = req.body.titulo;
    tarefas[index].descricao = req.body.descricao;
    tarefas[index].status = req.body.status;
    res.json(tarefas)
})



//Função para achar um ID igual(OBS, pode ser usada a Funçao pre pronta do javascript "filter")
function buscaTaskPorId (id){
    for(let i = 0; i < tarefas.length; i++) {
        if(tarefas[i].id == id){
            return tarefas[i]
        }
    }
}

//Função para achar o index para saber a opcao da atividade de um ID especifico.
function buscaIndexDaTask(id){
    for(let i = 0; i < tarefas.length; i++){
        if(tarefas[i].id == id){
            return i;
        }
    }
}

export default app;
