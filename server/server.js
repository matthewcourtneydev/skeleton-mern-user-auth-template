require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
 
const db = mongoose.connection;
db.on('error', (err) => console.error(err));
db.once('open', () => console.log('mongoose running'));

app.use(express.json());

const membersRouter = require('./routes/members');
app.use('/members', membersRouter)

app.listen(3001, () => {
    console.log(`Sever is now running on PORT: 3001`)
})