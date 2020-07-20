const mongoose = require('mongoose');

let schema = mongoose.Schema({
  alternativas: [
    {
      letra: { type: String, required: true },
      correta: { type: Boolean, required: true },
      texto: { type: String, required: true },
    },
  ],
  vestibular: { type: String, required: true },
  materia: { type: String, required: true },
  ano: { type: Number, required: true },
  numeroQuestao: { type: Number, required: true },
  resolucao: { type: String, required: true },
  enunciado: { type: String, required: true },
  disponivel: { type: Boolean, required: true },
});

const QuestionModel = mongoose.model('question', schema);

module.exports = QuestionModel;
