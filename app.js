var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();

// get route
var prepareHello = (req, res, next) => {
    console.log('Get Hello Delio!!!')
    req.hello = 'Get Hello Delio!!!';
    next();
}
var sendHello = (req, res) => {
    res.send(req.hello);
}
router.route('/hello').get(prepareHello, sendHello); // these arguments will be executed in order

// post route
app.use(bodyParser.json());
var printBody = (req, res) => {
    console.log(req.body.property);
    res.send('Post Done!!!');
}
router.route('/json').post(printBody);

app.use(router);

// server
app.listen(3000, 'localhost', () => {
    console.log('server is listening!');
});