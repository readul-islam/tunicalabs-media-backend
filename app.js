const express = require('express');
const StudentRoute = require('./routes/StudentRoute')
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use(StudentRoute)

module.exports = app;
