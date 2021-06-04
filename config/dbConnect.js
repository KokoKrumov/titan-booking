import mongoose from 'mongoose'

const dbConnect = () => {

    if (mongoose.connection.readyState >= 1) {
        // if db is not ready
        return
    }

    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    //     .
    // then(
    //     con => console.log('Connected to local Database')
    // )


}

export default dbConnect
