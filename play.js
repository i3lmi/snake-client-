const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: // IP address here,
    port: // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();

const connect = function () {
    const conn = net.createConnection({
      host: // IP address here,
      port: // PORT number here,
    });
  
    conn.setEncoding("utf8");
  
    conn.on("connect", () => {
      console.log("Successfully connected to game server");
    });
  
    conn.on("data", (data) => {
      console.log(data);
    });
  
    return conn;
  };
  
  function connect() {
    const conn = net.createConnection({
      host: 'localhost',
      port: 3000
    });
  
    // register connect handler
    conn.on('connect', () => {
      console.log("Successfully connected to game server");
      conn.write("Name: ABC"); // Replace ABC with your own initials
    });
  
    conn.setEncoding('utf8');
  
    // ...
  }
  
  // setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const { connect } = require("./client");

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// handle user input
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
};

console.log("Connecting ...");
const conn = connect();
setupInput();

const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

setupInput();