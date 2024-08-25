const express = require('express');
const cors = require('cors');
const pool = require('./db');

class App{
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(cors()); // Necessário quando aplicações em domínios distintos interagem entre si
    this.app.use(express.json()); // Tratamento de dados json
    this.app.use(express.urlencoded({ extended: true })); // Tratamento de dados via corpo da requisição
  }

  routes(){

    // Criar uma tarefa

    // Ler todas as tarefas

    // Atualizar uma tarefa

    // Deletar uma tarefa
    
  }
}

module.exports = new App().app;