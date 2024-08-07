Api de sistema de gerenciamento de tarefas.

Funcionalidades:
1 - criar tarefa -> Cada tarefa deve conter Titulo, Descrição e após serem enviadas o sitema deve retornar um status da mesma.
Ex: Corpo da requisição: { "title": "Nome da tarefa", "description": "Descrição da tarefa" }
Retorno: { "id": 1, "title": "Nome da tarefa", "description": "Descrição da tarefa", "status": "pendente" }
2 - Listar todas as tarefas.
3 - Listar uma tarefa apenas, utilizando o id da mesma.
4 - Atualizar uma tarefa também utilizando o id.
5 - Excluir uma tarefa.
