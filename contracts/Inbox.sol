pragma solidity ^0.4.24;
/*
Inbox contract.
Holds a public accessable string.
*/
contract Inbox {
    // Anybody can see the message.
    string public message = "Default message";

    // Inbox constructor.
    // If initial message is empty,
    // leave default message.
    constructor(string initialMessage) public {
        if (bytes(initialMessage).length != 0) {
            message = initialMessage;
        }
    }

    // Get messsage.
    function getMessage() public view returns (string) {
        return message;
    }
}
