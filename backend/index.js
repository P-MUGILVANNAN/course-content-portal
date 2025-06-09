const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

// Db connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Database connected");
})
.catch((err)=>{
    console.log("Error connecting database",err);
})

app.get('/',(req,res)=>{
    res.send("Express app is running");
});

// Use Routes
app.use('/api/users',authRoutes);

app.listen(process.env.PORT,()=>{
    console.log("Server is listening on "+ process.env.PORT)
})