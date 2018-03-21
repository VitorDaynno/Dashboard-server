var logger     = require('winston');
var transaction = require('../models/transaction')();

module.exports = function() {
    return {
        getThirty: function() {
            return new Promise(function (resolve,reject){
                logger.log('info',`[${new Date}][bussines-transactionBO] Getting transaction from database`);
                filter = {};
                transaction.find(filter).sort({'date': -1}).limit(30).exec()
                    .then(function (transactions){
                        logger.log('info',`[${new Date}][business-transactionBO] %d transaction were returned`,transactions.length);
                        resolve(transactions);
                    });
            });
        },

        getFormPayments: function() {
            return new Promise(function (resolve, reject){
                logger.log('info', `[${new Date}][bussines-transcationsBO] Getting transactions from database`);
                transaction.aggregate([{'$group':{'_id':'$formPayment'}}])
                    .then(function (transactions){
                        logger.log('info',`[${new Date}][business-transactionBo] %d forms payments were returned`, transaction.length);
                        resolve(transactions);
                    });
            });
        },

        getMonthlyExpenses: function(form) {
            return new Promise(function (resolve, reject){
                logger.log('info', `[${new Date}][bussines-transcationsBO] Getting transactions from database`);
                filter = [{'$match':{'formPayment':form}},{'$group':{'_id':{'$substr':['$date',0,7]},'value':{'$sum':'$value'}}},{'$sort':{'_id':-1}}];
                transaction.aggregate(filter)
                    .then(function (values){
                        logger.log('info',`[${new Date}][business-transactionBO] %d transaction were returned`,values.length);
                        resolve(values);
                    });
            });
        }
    };
};
