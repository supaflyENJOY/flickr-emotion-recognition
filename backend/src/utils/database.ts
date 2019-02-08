import * as mongoose from 'mongoose'

const uri: string = process.env.MONGO_URL

export default () => {
    mongoose.connect(uri, (err: any) => {
        if (err) 
            throw err;
    
        console.log("Database connected!")
    });
    
}

