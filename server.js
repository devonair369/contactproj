const express = require('express')
const connectDB = require('./config/db.js')
// import express from 'express';
// import connectDB from './config/db.js';
// import morgan from 'morgan';

const morgan = require('morgan')

const app = express()

// Connect database
connectDB()

// Init middleware
app.use(express.json({ extended: false }))

// Define routes
app.use('/api/users', require('./routes/users'))
app.use('/api/contacts', require('./routes/contacts'))
app.use('/api/auth', require('./routes/auth'))

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('/', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
}

const PORT = process.env.PORT || 3936

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
