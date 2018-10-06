const homeController = require('./../controllers/homeController');

module.exports = {
    configRoutes(app) {
        app.get('/', homeController.indexGet);
        return app;
    }
};