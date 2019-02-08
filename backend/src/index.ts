import * as dotenv from 'dotenv'
import * as fastify from 'fastify'

import databaseConnect from './utils/database';
import Photo from './models/Photo';

dotenv.config();

databaseConnect();
const app = fastify()

app.get('/', async (request, reply) => Photo.find())

app.get('/:id', async (request, reply) => {
    const photoId = request.query.id;
    return Photo.findOne({ photoId })
})
