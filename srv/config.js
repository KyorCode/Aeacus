var configSettings = {
    local: {
        mode: 'local',
        port: 3000,
        address: '127.0.0.1'
    }
};

var resolveConfig = function(mode){
    return configSettings[mode || 'local'] || configSettings.local
};

var path = function(cfg){
    return 'http://' + cfg.address + ':' + cfg.port;
};

exports.resolveConfig = function (mode) {
    return resolveConfig(mode);
};

exports.path = function(mode){
    var cfg = resolveConfig(mode);
    return path(cfg);
};