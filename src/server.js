require('dotenv').config();
const { app } = require('./app');

app.listen(3001, (error) => console.log(error, 'connected'));
