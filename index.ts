import { createSecretKey } from 'crypto';
import express, { application } from 'express';
import { type } from 'os';
import { json } from 'stream/consumers';

const app = express();
const port = 80;
app.get('/ping', (req, res) => {
    res.set({
        'Content-Type': 'application/json',
      })
    res.send(req.headers);
})

app.get('*', (req, res) => {
    res.sendStatus(404);

})


app.listen(port, () => {
    console.log('The application is listening on port '+ port+'!');
})
  