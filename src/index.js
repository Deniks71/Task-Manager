import express from 'express';
import conexao from '../database/conexao.js';

const app = express();
app.use(express.json());

//Cria uma nova Task
app.post('/tasks', (req,res)=> {
    const task = req.body;
    const sql = 'INSERT INTO bdtaskmanager.tasks SET ?;'
    conexao.query(sql, task, (erro, resultado)=> {
        if(erro) {
            console.log(erro);
            res.status(404).json({ 'erro': erro })
        } else {
            res.status(201).json(resultado);
        }
    });
});

//Lista todas as tasks
app.get('/tasks', (req,res)=> {
    const sql = 'SELECT * FROM bdtaskmanager.tasks;'
    conexao.query(sql, (erro, resultado)=> {
        if(erro) {
            console.log(erro);
            res.status(404).json({ 'erro': erro })
        } else {
            res.json(resultado);
        }
    });
});

//Lista uma tarefa especifica
app.get('/tasks/:id', (req,res)=>{
    //res.json(buscaTaskPorId(req.params.id));
    const id = req.params.id
    const sql = 'SELECT * FROM bdtaskmanager.tasks WHERE id=?;'
    conexao.query(sql, id, (erro, resultado)=> {
        if(erro) {
            console.log(erro);
            res.status(404).json({ 'erro': erro })
        } else {
            //A resposta do database é um array, por isso que utilizei o indice 0
            res.json(resultado[0]);
        }
    });
});

//Atualiza Task
app.put('/tasks/:id', (req,res)=> {
    const id = req.params.id;
    const task = req.body;
    const sql = 'UPDATE bdtaskmanager.tasks SET ? WHERE id=?;'
    conexao.query(sql, [task,id], (erro, resultado)=> {
        if(erro) {
            console.log(erro);
            res.status(404).json({ 'erro': erro })
        } else {
            //A resposta do database é um array, por isso que utilizei o indice 0
            res.status(200).json(resultado);
        }
    });
})

//deleta task
app.delete('/tasks/:id', (req,res)=> {
    // let index = buscaIndexDaTask(req.params.id);
    // tarefas.splice(index,1)
    // res.send(`Atividade com ID ${req.params.id} Exluida com sucesso`);
    // DELETE FROM `bdtaskmanager`.`tasks` WHERE (`id` = '4');
    const id = req.params.id
    const sql = 'DELETE FROM bdtaskmanager.tasks WHERE id=?;'
    conexao.query(sql, id, (erro, resultado)=> {
        if(erro) {
            console.log(erro);
            res.status(404).json({ 'erro': erro })
        } else {
            //A resposta do database é um array, por isso que utilizei o indice 0
            res.status(200).json(resultado);
        }
    });
})

export default app;
