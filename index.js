import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {
  getUser,
  userLogin,
  userRegistration,
} from './controllers/user-contoller.js';
import checkToken from './helpers/check-token.js';
import {
  createDelivery,
  deleteDelivery,
  getAllDeliveries,
  getOneDelivery,
  getWorkerDeliveries,
  updateDelivery,
} from './controllers/delivery-controller.js';
const port = process.env.PORT || 3001;

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log('DB ok');
  })
  .catch((err) => console.log('DB error', err));

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);

app.post('/users/registration', userRegistration);
app.post('/users/login', userLogin);
app.get('/users/get', checkToken, getUser);

app.post('/deliveries', checkToken, createDelivery);
app.get('/deliveries', checkToken, getAllDeliveries);
app.get('/deliveries/:id', checkToken, getOneDelivery);
app.get('/deliveries/worker/:id', checkToken, getWorkerDeliveries);
app.delete('/deliveries/:id', checkToken, deleteDelivery);
app.patch('/deliveries/:id', checkToken, updateDelivery);

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Server OK');
});
