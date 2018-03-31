var logger = require('winston');
var transactionBO = require('../../business/transactionBO')();

module.exports = function () {
    return {
        getDailyExpenses: function (req,res) {
            month = req.params.month;
            logger.log(`[${new Date}][controllers-charts] Get all daily expenses by `,month);
            transactionBO.getDailyExpenses(month)
                .then(function (dailyExpenses){
                    logger.log('debug', `[${new Date}][controllers-charts] The getDailyExpenses return: `, dailyExpenses);
                    res.status(200).json(dailyExpenses);
                });
        },

        getFormPayments: function (req,res) {
            logger.log('info',`[${new Date}][controllers-charts] Get forms payments`);
            transactionBO.getFormPayments()
                .then(function (formPayments){
                    logger.log('debug', `[${new Date}][controllers-charts] The getFormPayments return: `, formPayments);
                    res.status(200).json(formPayments);
                });
        },

        getMonthlyExpenses: function (req,res) {
            form = req.params.form;
            logger.log('info',`[${new Date}][controllers-charts] Get main chart`);
            transactionBO.getMonthlyExpenses(form)
                .then(function (monthlyExpenses){
                    logger.log('debug',`[${new Date}][controllers-charts] The getMain return : `, monthlyExpenses);
                    res.status(200).json(monthlyExpenses);
                });
        }
    };
};
