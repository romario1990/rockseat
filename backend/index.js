const express = require('express');

const app = express();

//use serve para adicionar regras para todos os verbos
app.use(express.json())
//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:
//Query Params: request.query (Filtros, ordanação, paginação)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)
//

app.post('/users/body', (request, response) => {
    console.log(request.body)
    return response.json({"message": 'Hello Omnistack'});
});

app.get('/users/query', (request, response) => {
    console.log(request.query)
    return response.json({"message": 'Hello Omnistack'});
});

app.delete('/users/params/:id', (request, response) => {
    console.log(request.params)
    return response.json({"message": 'Hello Omnistack'});
});

app.listen(3333);