const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000

app.use(cors());
app.use(express.json());

app.get('/data/:name', (req, res) => {
  const name = req.params.name;
  console.log("name: ", name);
  res.send(`Hi, I know your name is ${name}`);
})
app.post('/data', (req, res) => {
  const myData = req.body;
  const str = `Name: ${myData.name} - Jela: ${myData.jela}`;
  console.log(str);
  res.send(str);
})
app.put('/', (req, res) => {
  res.send('Hi, This is put data');
})
app.delete('/', (req, res) => {
  res.send('Hi, This is delete data');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
