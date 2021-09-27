const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const movieRoute = require('./routes/movies');
const listRoute  = require('./routes/lists');

dotenv.config();

//middleware 
app.use(express.json())

//connect mongoose
mongoose 
 .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
 })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

//routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/movies', movieRoute);
app.use('/api/lists', listRoute);

app.get("/", (req,res) => {
    res.send('Hello world')
})

app.listen(5000,()=> {
    console.log('Server is running at port 5000');
})