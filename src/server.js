require('dotenv').config();
require('./app/database/index')
const routes = require('./routes');
const express = require('express');
const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})