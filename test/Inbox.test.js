const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')

const web3 = new Web3(ganache.provider())
const { interface, bytecode } = require("../compile")

const INITIAL_MESSAGE = 'Test message'

let accounts
let inbox

beforeEach(async () => {
    // Get accounts list
    accounts = await web3.eth.getAccounts()

    // Deploy contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode,
            arguments: [ INITIAL_MESSAGE ]
        })
        .send({
            from: accounts[0],
            gas: '1000000'
        })
})

describe('Inbox contract:', () => {
    it('Can deploy the contract', () => {
        assert.ok(inbox.options.address)
    })

    it('Has default message', async () => {
        const message = await inbox.methods.message().call()
        assert.equal(message, INITIAL_MESSAGE)
    })
})