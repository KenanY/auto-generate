//!-AGS----------------------- Auto Start: PART 2 ------------------------------
// Do NOT edit text between auto start and auto end. It is auto generated.

// Load the net module to create a tcp server.
var net = require('net');

// New comment. This comment is altered from original.
var server = net.createServer(function (socket) {

    // Every time someone connects, tell them hello and then close the connection.
    console.log("Connection from " + socket.remoteAddress);
    socket.end("Hello World\n");
});


server.listen(7000, "localhost");


// Put a friendly message on the terminal
console.log("TCP server listening on port 7000 at localhost.");

// 26454d09dffdde0abdce46a3cdbe818e You can edit safely after auto end.
//!-AGE------------------------ Auto End: PART 2 -------------------------------

