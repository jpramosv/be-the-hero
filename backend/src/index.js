const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

/** 
 * get: buscar informações
 * post: criar uma informação
 * put: alterar informação
 * delete: deletar informação
*/

/** 
 * Parametos
 * 
 * Query:Parametros nomeados enviados na rota apos ?
 * route params: parametros utilizados para indetificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/



app.listen(3333);

