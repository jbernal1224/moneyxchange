var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var morgan = require('morgan');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 5000;

var mongoose   = require('mongoose');
mongoose.connect('mongodb://jbernal1224:Test1234@ds213209.mlab.com:13209/xchange');

mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("DB connection alive");
});

var Currency = require('./app/models/currency');

var router = express.Router();

router.use(function(req, res, next) {
    //TODO implement logging
	console.log('Do logging');
	next();
});

router.get('/', function(req, res) {
	res.json({ message: 'Welcome!' });
});

router.route('/currencies').get(function(req, res) {
    res.json([
        {name: 'USD', enabled: true},
        {name: 'EUR', enabled: false}
    ]);
});

router.route('/calculate').post(function(req, res) {
    var newValue = req.body.valueUSD * req.body.valueEUR;

    res.json({value: newValue});
});

app.use('/api', router);

app.listen(port);
