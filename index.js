const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
    'mongodb+srv://user:pass@cluster0-tv8td.gcp.mongodb.net/blog?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log('DB connected!'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('hello world')
});

app.listen(5000);