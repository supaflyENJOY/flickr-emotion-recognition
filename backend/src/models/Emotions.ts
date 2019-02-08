import * as mongoose from 'mongoose'

export const EmotionsSchema =  new mongoose.Schema({
    sadness: Number,
    neutral: Number,
    disgust: Number,
    anger: Number,
    surprise: Number,
    fear: Number,
    happiness: Number
});

export default mongoose.model('Emotions', EmotionsSchema);