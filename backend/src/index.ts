import * as dotenv from 'dotenv'
dotenv.config();

import * as fastify from 'fastify'
import databaseConnect from './utils/database';
import Photo from './models/Photo';
import startWorker from './modules/worker';
import { join } from 'path';

databaseConnect();
const app = fastify()

const cors = require('cors')
app.use(cors());

app.register(require('fastify-static'), {
  root: join(__dirname, 'public'),
})

const itemsPerPage = 18;

app.get('/api/list', async (request, reply) => Photo.find().sort({ creationDate: 1 }).limit(itemsPerPage).skip(request.query.page * itemsPerPage))

const port = process.env.PORT ? parseInt(process.env.PORT) : 8080;
console.log("Starting server at " + port);
app.listen(port, "0.0.0.0", (err, adrr) => {
  console.log("Server started!", err, adrr);
});

startWorker();