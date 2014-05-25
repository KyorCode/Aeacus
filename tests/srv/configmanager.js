var expect = require('must');
var configmanager = require('./../../srv/configmanager');

describe('./srv/configmanager', function () {

    describe('resolveConfig', function () {

        beforeEach(function () {
            this.newConfigManager = function (cfgSettings) {
                return new configmanager(cfgSettings);
            };
        });

        it('it should resolve the right configuration', function () {
            var cfgManager = this.newConfigManager({
                local: {
                    mode:'local'
                },
                travis: {
                    mode: 'travis'
                }});

            var cfg = cfgManager.resolveConfig('local');

            expect(cfg.mode).to.be.equal('local');
            expect(cfg.mode).to.not.be.equal('travis');
        });

        it('it should resolve local for an unknown configuration', function () {
            var cfgManager = this.newConfigManager({
                local: {
                    mode:'local'
                }});

            var cfg = cfgManager.resolveConfig('travis');

            expect(cfg.mode).to.be.equal('local');
        });

        it('it should resolve local if no configuration is provided', function () {
            var cfgManager = this.newConfigManager({
                local: {
                    mode:'local'
                }});

            var cfg = cfgManager.resolveConfig();

            expect(cfg.mode).to.be.equal('local');
        });

    });

});