var config = require('./infrastructure/config');

module.exports = function (configSettings) {
    var resolveConfig = function (mode) {
        var setting = configSettings[mode || 'local'] || configSettings.local;

        return new config(setting.mode, setting.address, setting.port);
    };

    return {
        resolveConfig: resolveConfig
    }
};