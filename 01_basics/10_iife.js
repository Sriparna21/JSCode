// Immediately Invoke Function Expressions (IIFE)

// Named IIFE
(function chai () {
    console.log (`DB connected`)
})();

// chai ()
// To avoid global scope pollution, IIFE is used
// Semicolon is a must here to end execution scope


// Unnamed IIFE and with parameters
( (name) => {
    console.log (`DB connected 2 ${name}`)
}) ("yo");