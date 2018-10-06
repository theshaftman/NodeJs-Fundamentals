const express = require('express');
const settings = require('./settings');
const configExpress = require('./config/express');
const configRoutes = require('./config/routes');
const app = express();
configExpress.configApp(app);
configRoutes.configRoutes(app);

app.listen(settings.port, () => {
    console.log(`started http://localhost:${settings.port}/`);
});