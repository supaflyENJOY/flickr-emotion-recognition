import * as dotenv from 'dotenv'
import * as fastify from 'fastify'

import Photo, { Emotions } from './providers/photosProvider'

dotenv.config();

const app = fastify()

app.get('/', async (request, reply) => Photo.find())

app.get('/:id', async (request, reply) => {
    const photoId = request.query.id;
    return Photo.findOne({ photoId })
})
