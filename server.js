	const express = require('express');
	const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items')

const app = express();

//Body
app.use(bodyParser.json());

//DB
const uri = require('./config/keys').mongoURI;

//Connect
mongoose
	.connect(uri, {useNewUrlParser: true})
	.then(() => console.log('MongoDB connected...'))
	.catch(err => console.error(err));
	
const port = process.env.PORT || 5000;

app.use('/api/items', items);

app.listen(port, () => console.log(`Server started on port ${port}`));
