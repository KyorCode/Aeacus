module.exports = function (mode,address, port) {

    var resolvePath = function () {
        return 'http://' + address + ':' + port;
    };

    return {
        mode : mode,
        port: port,
        address: address,
        resolvePath: resolvePath
    }
};