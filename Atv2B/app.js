const express = require('express');
const mongoose = require('mongoose');

// Conectar ao banco de dados
mongoose.connect('mongodb://localhost:27017/nome_do_banco_de_dados', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado ao banco de dados');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });

// Definir o esquema do documento
const pessoaSchema = new mongoose.Schema({
  nome: String,
  sobrenome: String,
  email: String,
  datanascimento: Date,
  matricula: Number
});

// Definir o modelo
const Pessoa = mongoose.model('Pessoa', pessoaSchema);

// Configurar a aplicação Express
const app = express();
app.use(express.json());

// Rota para cadastro de pessoa
app.post('/pessoas', async (req, res) => {
  try {
    const pessoa = new Pessoa(req.body);
    await pessoa.save();
    res.status(201).json(pessoa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar pessoa' });
  }
});

// Rota para consulta de pessoas
app.get('/pessoas', async (req, res) => {
  try {
    const pessoas = await Pessoa.find();
    res.json(pessoas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar pessoas' });
  }
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});

