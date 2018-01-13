var logger = require('winston');
var transactionBO = require('../../business/transactionBO')();

module.exports = function () {
    return {
        getThirty: function (req,res) {
            logger.log('info','[controllers-historic] GetAll historic');
            transactionBO.getThirty().then(function (transactions){
                logger.log('debug','[controllers-historic] The getThirty return : ', transactions);
                historic = transactions;
                res.status(200).json(historic);                
            }).catch(function (error){
                res.status(500);
            });          
        }
    };
};