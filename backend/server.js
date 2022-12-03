// dependecies
require('dotenv').config();
require('express-async-errors');
const fileUpload = require('express-fileupload');
const express = require('express');
const cloudinary = require('cloudinary');
const connectDB = require('./db/dbConn');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const clientURI = "http://localhost:3000";

// initialization app
const app =express();
const server=require('http').createServer(app);
const PORT = process.env.PORT || 8080

// security and middlewares
app.use(xss());
app.use(helmet());
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));
app.use(cors({ origin: clientURI }));

// Routes


const startDB = async()=>{
  try {
    await connectDB(process.env.MONGO_URI);
    server.listen(PORT,()=> console.log(`Coonect to mongoDB, Server Running On PORT ${PORT}`))
  } catch (error) {
    console.log(error);
  }
};

startDB();