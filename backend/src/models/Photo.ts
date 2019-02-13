import * as mongoose from 'mongoose'
import { EmotionsSchema } from './Emotions'
import * as mongoosePaginate from 'mongoose-paginate';

export const PhotoSchema = new mongoose.Schema({
    photoId: { type: String, required: true },
    description:  String,
    creationDate: Date,
    url: String,
    emotions: [EmotionsSchema]
});
PhotoSchema.plugin(mongoosePaginate);

export default mongoose.model('Photo', PhotoSchema);