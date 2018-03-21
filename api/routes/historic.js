module.exports = function(app) {
    var controller = app.controllers.historic;

    app.route('/v1/historic')
        .get(controller.getThirty);
};
