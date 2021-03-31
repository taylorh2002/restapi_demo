require("dotenv").config();
console.log(process.env.MONGO_URI);

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Successfully connected to mongodb")
    } catch (error) {
        console.log(error)
    }
}