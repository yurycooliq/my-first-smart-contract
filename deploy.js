require('./bootstrap')
const HDWalletProvider = require("truffle-hdwallet-provider")
const Web3 = require('web3')
const provider = new HDWalletProvider(process.env.MNEMONIC_PHRASE, process.env.NETWORK_ENDPOINT)
const web3 = new Web3(provider)
const { interface, bytecode } = require('./compile')
const deploy = async () => {
    // Get accounts
    const accounts = await web3.eth.getAccounts()
    console.log('Trying to deploy contract from address', accounts[0])
    // Deploy contract
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode,
            arguments: [ 'Initial message' ]
        })
        .send({
            from: accounts[0],
            gas: '1000000'
        })
    console.log('Contract deployed to', result.options.address)
}

deploy()