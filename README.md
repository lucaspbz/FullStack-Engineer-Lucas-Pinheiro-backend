CRUD API feita em Node.js para suporte de aplicações WEB e MOBILE para desafio de processo seletivo.

1 - Para rodar esse projeto em sua máquina faça o download ou clone do repositório e rode -npm install- OU -yarn- para instalar as dependências.
2 - Crie um arquivo .env na raiz do projeto e insira sua string de conexão com um banco de dados MongoDB na variável DB_CONNECTION.
3 - Rode o comando -npm start- OU -yarn start-.
4 - A API vai estar rodando na porta 3000.

Para este projeto eu fiz uso do Mongoose para a modelagem dos dados e gravação no banco, e Express para criação do servidor e gerencimanento das rotas HTTP.

Durante o desenvolvimento do projeto WEB eu notei uma pequena incosistência dos dados no campo _id, onde alguns documentos estavam com o tipo String, e outros ObjectId.
Essa incosistência levou a impossibilidade de encontrar e editar alguns documentos (os que tinham _id do tipo String). Foi um problema que eu precisaria de um pouco mais de 
tempo para resolver.

Esse servidor está hospedado em https://testefb-lucas.herokuapp.com/ pronto para uso.

ROTAS:

GET('/') => Não recebe nenhum tipo de parêmtro, o body é vazio e retorna uma lista com todas as questões cadastradas em formato JSON.

POST('/', BODY) => Espera um body em formato JSON e cria uma nova questão: {
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
}

PUT('/:id', BODY) => Espera um body em formato JSON, encontra uma questão com o campo _id correspondente ao recebido edita a questão encontrada: {
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
}

DELETE('/:id') => Encontra uma questão com o campo _id correspondente ao passado via query params e exclui do banco de dados.
