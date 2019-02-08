import * as mongoose from 'mongoose'

const uri: string = process.env.MONGO_URL

mongoose.connect(uri, (err: any) => {
    if (err) 
        return console.log(err.message);

    console.log("Succesfully Connected!")
})

export const EmotionsSchema = new mongoose.Schema({
    sadness: Number,
    neutral: Number,
    disgust: Number,
    anger: Number,
    surprise: Number,
    fear: Number,
    happiness: Number
});

export const PhotoSchema = new mongoose.Schema({
    photoId: { type: String, required: true },
    description:  String,
    creationDate: Date,
    url: String,
    emotions: EmotionsSchema
});
  
export const Emotions = mongoose.model('Emotions', EmotionsSchema)

const Photo = mongoose.model('Photo', PhotoSchema)
export default Photo