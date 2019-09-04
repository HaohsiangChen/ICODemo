var DemoToken = artifacts.require('./DemoToken.sol');
var DemoTokenSale = artifacts.require('./DemoTokenSale.sol');

module.exports = function(deployer) {
    deployer.deploy(DemoToken, 1000000).then(function(){
        return deployer.deploy(
            DemoTokenSale,
            DemoToken.address,
            1000000000000000
        );
    });
};