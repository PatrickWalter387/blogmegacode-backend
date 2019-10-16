const express = require('express');
const routes = express.Router();

const PostagensController = require('./controllers/PostagensController')
    
    
   routes.get('/Postagens', PostagensController.listar);
   routes.get('/PostagensRecentes', PostagensController.listarEspecifico);
   routes.post('/Postagens', PostagensController.criar);
   routes.post('/Refresh', PostagensController.refresh);
   routes.post('/PostagensAtualizar/:id', PostagensController.atualizar);
   routes.get('/Deletar/:id', PostagensController.excluir);
   
   

module.exports = routes;