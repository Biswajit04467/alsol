const express = require('express');
const { dbConnect } = require('./config/dbConnect');
const app = express();
const visitRoutes = require('./router/visitRoutes')
const cors = require('cors');
app.use(cors())
app.use(express.json());
require('dotenv').config();

const PORT = process.env.PORT || 3000

dbConnect();
app.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
})

app.use('/api/v1', visitRoutes);

app.get('/', (req, res) => {
    res.send('hahahahahaha')
});