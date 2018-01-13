var mongoose = require('mongoose');

module.exports = function () {
    var transaction = mongoose.Schema({
       
    });

    model = mongoose.model('Transaction', transaction);

    return model;
};