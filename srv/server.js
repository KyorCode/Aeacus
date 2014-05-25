var configmanager = require('./configmanager');
var configSettings = require('./configsettings');
var innerServer;


exports.boot = function (app) {
    app.use(function (err, req, res, next) {
        if (err)
            console.log(err);
        next();
    });

    var cfgManager = new configmanager(configSettings);
    var cfg = cfgManager.resolveConfig('local');
    innerServer = app.listen(cfg.port, cfg.address, function () {
        console.log('Server booted! - ' + cfg.resolvePath());
    });
};