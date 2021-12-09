const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT

const Visitor = require('./models/visitors.model');

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

// --- post all visitors
app.post('/api/visitors', (req, res) => {
    console.log(req.body);
    const {username, surname, email, age} = req.body
    const visitor = new Visitor ({
        username,
        surname,
        email,
        age,
    })
    visitor.save( err => {
        if(err) {
            res.send(err)
        } else {
            res.send({message: "Succesfully Registered"})
        }
    })
  })

  // --- update visitor info
  app.put('/api/visitors/:id', (req, res) => {
    const visitorId = req.params.id
    const updatedVisitor = req.body
  
    Visitor.findByIdAndUpdate(visitorId, updatedVisitor)
    .then((result) => res.json({message: 'Visitor updated'}))
    .catch((err) => res.json({message: 'Visitor not updated, try again later'}))
  });

  // --- delete visitor info
  app.delete('/api/visitors/:id', (req, res) => {
    const visitorId = req.params.id;

    Visitor.findByIdAndDelete(visitorId)
      .then((result) => res.json({ message: 'Visitor deleted' }))
      .catch((err) =>
        res.send({ message: 'Visitor not deleted, try again later' })
      );
  });