
const path = require('path');
require('dotenv').config();
const routes = require('./config/routes');
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/', routes);

app.listen(process.env.PORT || 7000, () => {
    console.log('Server is running on port 3000');
});
