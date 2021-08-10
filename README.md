# Tokenization

Initial test phase for ERC20 token fit.
Truffle configuration will deploy contracts to any public network
specified into truffle-config.js. 

A different infura projectId for each network is required.

To Verify/Publish on Etherscan we will use Truffle verify plugin and contract functions will be available for testing online.

## Prerequisites ###

* Node v14.17.0
* Truffle v5.3.1
* Infura Project Key
* Etherscan API Key

## Getting started ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

## Contract Deployment ###

 - /contracts/erc20
 - truffle migrate --network ropsten --reset

## Contract Specifications ###

 - 

## Etherscan verification
 `truffle run verify TokenBCA  --network ropsten --debug`
