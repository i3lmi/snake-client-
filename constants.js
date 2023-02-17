const IP = 'localhost';
const PORT = 50541;

module.exports = {
  IP,
  PORT,
};

const { IP, PORT } = require('./constants');

// ...

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // ...
}

const IP = "localhost";
const PORT = 50541;

module.exports = {
  IP,
  PORT,
};

const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: JNS');
  });

  return conn;
};

module.exports = {
  connect
};
