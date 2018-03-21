var logger = require('winston');
var transactionBO = require('../../business/transactionBO')();

module.exports = function () {
    return {
        getThirty: function (req,res) {
            logger.log('info',`[${new Date}][controllers-historic] GetAll transactions`);
            transactionBO.getThirty().then(function (transactions){
                logger.log('debug',`[${new Date}][controllers-historic] The getThirty return : `, transactions);
                historic = transactions;
                res.status(200).json(historic);
            });
        }
    };
};
