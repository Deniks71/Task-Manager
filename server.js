import app from "./src/index.js";
import conexao from "./infra/conexao.js";

const PORT = 3000;

//fazer a conexao no data base
conexao.connect((erro) => {
    if(erro){
        console.log(erro);
    } else {
        console.log('Conexao realizada com sucesso.')
        //Nesse caso o server só vai subir se nos conectarmos corretamente no banco de dados.
        app.listen(PORT, () => {
            console.log(`Server rodando na porta ${PORT}`);
        });
    }
})

