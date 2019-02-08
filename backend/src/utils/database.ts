import * as mongoose from 'mongoose'

export default () => {
    const uri: string = process.env.MONGO_URL

    mongoose.connect(uri, (err: any) => {
        if (err) 
            throw err;
    
        console.log("Database connected!")
    });
    
}

