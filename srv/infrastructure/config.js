module.exports = function (address, port) {

    var resolvePath = function () {
        return 'http://' + address + ':' + port;
    };

    return {
        port: port,
        address: address,
        resolvePath: resolvePath
    }
};