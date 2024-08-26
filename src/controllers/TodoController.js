const pool = require('../../db');

class TodoController{
  static async postMethod(req, res){
    try {
      const { description } = req.body;
      const newTodo = await pool.query('INSERT INTO todo (description) VALUES ($1) RETURNING *;', [description]);
      return res.status(200).json({  'mensagem': `Tarefa ${newTodo.rows[0].description} criada com sucesso!`});
    } catch(error){
      console.log(error.message);
      return res.status(500).json({ 'mensagem': 'Erro no servidor' });
    }
  }

  static async getMethod(req, res){
    try {
      const tarefas = await pool.query('SELECT * FROM todo;');
      const linhas = [];

      tarefas.rows.forEach((row) => {
        linhas.push(row.description);
      });
      return res.status(200).json(linhas);
    } catch(error){
      console.log(error.message);
      return res.status(500).json({ 'mensagem': 'Erro no servidor' });
    }
  }

  static async getOneMethod(req, res){
    try {
      const { id } = req.params;

      const tarefa = await pool.query('SELECT * FROM todo WHERE todo_id = $1;', [id]);
      if(!tarefa.rows.length) return res.status(404).json({ 'mensagem': 'A tarefa especificada não existe.' });
      return res.status(200).json(tarefa.rows[0].description);
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ 'mensagem': 'Erro no servidor.' });
    }
  }

  static async putMethod(req, res){
    try {
      const { id } = req.params;
      const { description } = req.body;

      const tarefaAtualizar = await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *;', [description, id]);
      if(!tarefaAtualizar.rows.length) return res.status(404).json({ 'mensagem': 'A tarefa especificada não existe.' });

      const tarefa = tarefaAtualizar.rows[0].description;
      return res.status(200).json({ 'mensagem': 'Tarefa atualizada.', tarefa });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ 'mensagem': 'Erro no servidor.' });
    }
  }

  static async deleteMethod(req, res){
    try {
      const { id } = req.params;
      const tarefaDeletar = await pool.query('DELETE FROM todo WHERE todo_id = $1 RETURNING *;', [id]);

      if(!tarefaDeletar.rows.length) return res.status(404).json({ 'mensagem': 'A tarefa especificada não existe.' });
      return res.status(200).json({ 'mensagem': 'Tarefa deletada com sucesso.' });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ 'mensagem': 'Erro no servidor.' });
    }
  }
}

module.exports = TodoController;

