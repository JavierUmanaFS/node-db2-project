const express = require('express');
const helmet = require('helmet');

const cors = require('cors');

const dealerRouter = require('../car-dealer/car-dealer-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/car-dealer', dealerRouter);

module.exports = server;