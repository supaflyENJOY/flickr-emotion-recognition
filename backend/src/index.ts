import * as dotenv from 'dotenv'
dotenv.config();

import * as fastify from 'fastify'
import databaseConnect from './utils/database';
import Photo from './models/Photo';
import getPhotos from './modules/getPhotos';
import getEmotions from './modules/getEmotions'

// Flickr photos request
//getPhotos().then(console.log)

databaseConnect();
const app = fastify()

app.get('/', async (request, reply) => Photo.find())

app.get('/:id', async (request, reply) => {
    const photoId = request.query.id;
    return Photo.findOne({ photoId })
})
