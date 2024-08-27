require('dotenv').config()

const app = require('./app');
const port = process.env.PORT;

app.listen(port, () => {
  console.log('Servidor escutando na porta 3002');
  console.log('Acesse http://localhost:3002');
});