import { createSecretKey } from 'crypto';
import express, { application } from 'express';
import { type } from 'os';
import { json } from 'stream/consumers';

const app = express();
const PING_LISTEN_PORT = 8080;
app.get('/ping', (req, res) => {
    res.set({
        'Content-Type': 'application/json',
      })
    res.send(req.headers);
})

app.get('*', (req, res) => {
    res.sendStatus(404);

})


app.listen(PING_LISTEN_PORT, () => {
    console.log('The application is listening on port '+ PING_LISTEN_PORT+'!');
})
  