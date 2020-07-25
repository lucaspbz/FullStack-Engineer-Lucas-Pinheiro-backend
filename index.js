const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./src/routes/routes');

const app = express();
app.use(cors());
app.use(express.json({ limit: '20mb' }));

app.use(routes);

const { DB_CONNECTION } = process.env;

console.log('Iniciando conexão ao MongoDB...');
mongoose.connect(
  DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      connectedToMongoDB = false;
      console.error(`Erro na conexão ao MongoDB - ${err}`);
    }
  }
);

const { connection } = mongoose;

connection.once('open', () => {
  connectedToMongoDB = true;
  console.log('Conectado ao MongoDB');

  const port = process.env.PORT || 3000;
  app.listen(port, () =>
    console.log(`Server running on http://localhost:${port}`)
  );
});
