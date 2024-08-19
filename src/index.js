import express from 'express';
import conexaoPromise from '../database/conexao.js';

const app = express();
app.use(express.json());

//Cria uma nova Task
app.post('/tasks', async (req,res)=> {
    const task = req.body;
    const sql = 'INSERT INTO bdtaskmanager.tasks SET ?;'
    try {
        const [resultado] = await conexaoPromise.query(sql,task);
        res.status(201).json(resultado);
    } catch(erro) {
        console.log(erro);
        res.status(404).json({ 'erro': erro })
    }
});

//Lista todas as tasks
app.get('/tasks', async (req,res)=> {
    const sql = 'SELECT * FROM bdtaskmanager.tasks;'
    try {
        const [resultado] = await conexaoPromise.query(sql);
        res.json(resultado);
    } catch(erro) {
        res.status(404).json({ 'erro': erro })
    };
});

//Lista uma tarefa especifica
app.get('/tasks/:id', async (req,res)=>{
    const id = req.params.id
    const sql = 'SELECT * FROM bdtaskmanager.tasks WHERE id=?;'
    try {
        const [resultado] = await conexaoPromise.query(sql,id);
        res.status(200).json(resultado[0]);
    } catch(erro) {
        res.status(404).json({ 'erro': erro })
    }

});

//Atualiza Task
app.put('/tasks/:id', async (req,res)=> {
    const id = req.params.id;
    const task = req.body;
    const sql = 'UPDATE bdtaskmanager.tasks SET ? WHERE id=?;'
    try{
        const [resultado] = await conexaoPromise.query(sql,[task,id]);
        res.status(200).json(resultado);
    } catch(erro) {
        console.log(erro);
        res.status(404).json({ 'erro': erro });
    };

})

//deleta task
app.delete('/tasks/:id', async (req,res)=> {
    const id = req.params.id
    const sql = 'DELETE FROM bdtaskmanager.tasks WHERE id=?;'
    try {
        const [resultado] = await conexaoPromise.query(sql,id);
        res.status(200).json(resultado);
    } catch(erro) {
        console.log(erro);
        res.status(404).json({ 'erro': erro })
    }
   
})

export default app;
