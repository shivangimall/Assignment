const  mongoose  = require("mongoose");
const app = require("./index");
const dotenv = require("dotenv");
dotenv.config()
const axios = require('axios');
const Product = require("./models/product.model")
// const initializeDatabase  = require("./utils/index")

const PORT = process.env.PORT||3000;
const mongo_url = process.env.MONGO_URI;

const initializeDatabase = async () => {

    const  data = await axios.get(process.env.DATA_API);
    console.log(data.data)
    if(!data)
    {
        console.log("Failed to fetch data with API");
    }
    const response = await Product.insertMany(data.data);

    if(!response)
    {
        console.log("failed to initialize db with seed data");
    }

    console.log("DB initialized with seed data");

};

mongoose.connect(mongo_url).then(()=>{
    console.log("Connected to DB");
    console.log("Initializing Database");
    initializeDatabase();

}).catch((err)=>{
    console.log(err.message)
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})