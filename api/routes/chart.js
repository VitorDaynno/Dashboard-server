module.exports = function(app) {
    var controller = app.controllers.chart;

    app.route('/v1/formPayments')
        .get(controller.getFormPayments);

    app.route('/v1/monthlyExpenses/:form')
        .get(controller.getMonthlyExpenses);

    app.route('/v1/dailyexpenses/:month')
        .get(controller.getDailyExpenses);
};
