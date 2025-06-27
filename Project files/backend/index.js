// index.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connect');

dotenv.config(); // Load .env file

const app = express();
connectDB();

app.use(express.json());

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
