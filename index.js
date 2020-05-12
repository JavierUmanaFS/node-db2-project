const server = require('./api/server.js');

const port = process.env.PORT || 5000;

server.listen(port , () => console.log(`Api running on port ${port}`));