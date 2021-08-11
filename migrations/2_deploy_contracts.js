const TokenBCA = artifacts.require("../contracts/erc20/TokenBCA.sol");
const MinterBCA = artifacts.require("../contracts/erc20/MinterBCA.sol");

module.exports = (deployer, network, accounts) => {

  const userAddress = accounts[0]; console.log(accounts)
  const ropstenAccount = '0x8B13f183e27AaD866b0d71F0CD17ca83A9a54ae2';

  deployer.deploy(TokenBCA, "_name", "_symbol");
  deployer.deploy(MinterBCA, "BCA_Token", "BCA", ropstenAccount);

}