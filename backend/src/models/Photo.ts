import * as mongoose from 'mongoose'
import { EmotionsSchema } from './Emotions'
export const PhotoSchema = new mongoose.Schema({
    photoId: { type: String, required: true },
    description:  String,
    creationDate: Date,
    url: String,
    emotions: EmotionsSchema
});

export default mongoose.model('Photo', PhotoSchema);