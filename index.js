const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const { User } = require('./model/user')

const config = require('./config/key');


mongoose.connect(
    //'mongodb+srv://user:pass@cluster0-tv8td.gcp.mongodb.net/blog?retryWrites=true&w=majority',
    config.mongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log('DB connected!'))
    .catch(err => console.log(err))

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.post('/api/users/register', (req,res) => {
    const user = new User(req.body);
    user.save((err, userData) => {
        if (err) {
            res.json({success: false, err});
            console.error(err);
        }
        return res.status(200).json({success: true, userData});
    })
    
})

app.get('/', (req, res) => {
    res.json({'msg':'hello world'});
});

app.listen(5000);