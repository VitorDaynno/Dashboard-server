var logger     = require('winston');
var transaction = require('../models/transaction')();

module.exports = function() {
    return {
        
        getThirty: function(search) {
            return new Promise(function (resolve,reject){
                logger.log('info','[bussines-transactionBO] Getting transaction from database');
                filter = {};
                transaction.find(filter).exec()
                    .then(function (transactions){
                        logger.log('info','[business-transactionBO] %d transaction were returned',transactions.length);
                        resolve(transactions);
                    });
            });
        }
    }
}