// X-platform filesystem utils
const path = require('path')
const fs = require('fs')

// Solidity compiler
const solc = require('solc')

// Get source of contract
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol')
const source = fs.readFileSync(inboxPath, 'utf8')

// Export compiled contract
module.exports = solc.compile(source, 1)
