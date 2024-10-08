// Create web server
// Run the server
// Access the server from the browser
// Display "Hello world" on the browser
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello world');
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Output: Server is running on http://localhost:3000