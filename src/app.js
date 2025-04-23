const express = require('express');
const app = express();
const taskRoutes = require('./routes/app.routes');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/v1/', taskRoutes);

module.exports = app;
