var configmanager = require('./configmanager');
var configSettings = require('./configsettings');
var router = require('./router');
var innerServer;


exports.boot = function (app) {
    router.CreateNew(app);

    var cfgManager = new configmanager(configSettings);
    var cfg = cfgManager.resolveConfig('local');
    innerServer = app.listen(cfg.port, cfg.address, function () {
        console.log('Server booted! - ' + cfg.resolvePath());
    });
};