const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');



const app = express();

connectDB();

// Init Malware
app.use(express.json({extended: false}));
app.use(bodyParser.json());



app.get('/', (req, res) => res.send('API RUNNING...'));

// Define Routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));


const PORT = process.env.PORT || 8080;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));