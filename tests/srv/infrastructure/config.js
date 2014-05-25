var expect = require('must');
var config = require('./../../../srv/infrastructure/config')

describe('./srv/nfrastructure/Config', function () {

    it('should return the right mode', function () {
        var expectedMode = 'local';
        var cfg = new config(expectedMode, null, null);

        expect(cfg.mode).to.be.equal(expectedMode);
    });

    it('should return the right address', function () {
        var expectedAddress = 'www.google.com';
        var cfg = new config(null, expectedAddress, null);

        expect(cfg.address).to.be.equal(expectedAddress);
    });

    it('should return the right port', function () {
        var expectedPort = 3000;
        var cfg = new config(null, null, expectedPort);

        expect(cfg.port).to.be.equal(expectedPort);
    });

    it('should return the right path', function () {
        var port = 3000;
        var address = 'www.google.com';
        var expectedAddress = 'http://www.google.com:3000';

        var cfg = new config(null, address, port);

        expect(cfg.resolvePath()).to.be.equal(expectedAddress);
    });
});