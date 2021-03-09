import express from 'express';
 
const app = express();
 
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/healthz', (req, res) => {
    res.send('i am alive and well!');
});
 
app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);