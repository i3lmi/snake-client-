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
  