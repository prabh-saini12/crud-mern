const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const connectToMongo = require('./db');
const port = process.env.PORT;
const createBookRouter = require('./routes/Createbooks.route')
connectToMongo();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use('/api', createBookRouter)

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.listen(port, () => {
    console.log("server running");
});
