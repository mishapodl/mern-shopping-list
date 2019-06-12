const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

//Body
app.use(express.json());

//DB
const uri = require('./config/keys').mongoURI;

//Connect
mongoose
.connect(uri, { useNewUrlParser: true})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error(err));

app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));