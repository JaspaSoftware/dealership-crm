
const path = require('path');
const routes = require('./config/routes');
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/', routes);

const PORT = process.env.PORT || 8000;

app.listen(process.env.PORT || 7000, () => {
    console.log(`Server is running on port ${process.env.PORT || 7000}`);
});
