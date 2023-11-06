// step1: 載入Node.js HTTP Module
const http = require('http');

// step 2: Define related variables
const hostName = 'localhost';
const port = 3000;

// step 3: 建立server, 管理req及res
const server = http.createServer((req, res) => {
    // step 4:　設定回應Response的內容
    res.statusCode  = 200;
    res.setHeader = ('content-Type', 'text/html');
    res.end('<h1>This is the server created by Node.js</h1>');
    console.log('Hello from Jenkins!');
});

// step 5: 啟動與監聽server
server.listen(port, hostName, () => {
    console.log(`The server is listening on http://${hostName}:${port}.`);
});