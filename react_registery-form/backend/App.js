const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT

const Visitor = require('./models/visitors.model')

// -- middlewares
app.use(express.json())
app.use(cors());

// Connecting to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => {
    console.log('Connected to mongoDB');

    // Starting server
    app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
  })
  .catch((err) => console.log(err));

// -- routes
app.get('/', (req, res) => res.send('API is running...'));

// -- get
// --- get all visitors
app.get('/api/visitors', (req, res) => {
  Visitor.find({}).then((data) => res.json(data));
});

app.get('/api/signup', (req, res) => {
  res.json(register);
});
