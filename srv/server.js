var configmanager = require('./configmanager');
var innerServer;


exports.boot = function (app) {
    app.use(function (err, req, res, next) {
        if (err)
            console.log(err);
        next();
    });

    var cfg = configmanager.resolveConfig('local');
    innerServer = app.listen(cfg.port, cfg.address, function () {
        console.log('Server booted! - ' + cfg.path);
    });
};