var express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({
    title: 'API Server',
    description: 'Powered by Express'
  })
})


const PORT = process.env.port || 5000;
app.listen(PORT);
