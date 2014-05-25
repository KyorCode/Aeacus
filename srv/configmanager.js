var config = require('./infrastructure/config');

var configSettings = {
    local: {
        mode: 'local',
        port: 3000,
        address: '127.0.0.1'
    }
};

var resolveConfig = function(mode){
    var setting = configSettings[mode || 'local'] || configSettings.local;

    return new config(setting.address,setting.port);
};

exports.resolveConfig = function (mode) {
    return resolveConfig(mode);
};