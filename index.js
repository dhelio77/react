var double = require('./util').double;
var mongoose = require('mongoose');
var uuid = require('uuid');

console.log(uuid.v4());

var numbers = [3, 7, 40];
console.log(numbers.map(double));

var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:react/react');

var UserSchema = new Schema({
    email: {
        type: Strings
    },
    password: {type: string}
});