var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CurrencySchema = new Schema({
	enabled: Boolean,
    name: String
});

module.exports = mongoose.model('Currency', CurrencySchema);