console.log("hello world\n");

const data = 'RE8xMDF4IGlzIGF3ZXNvbWUh';
console.log(Buffer.from(data, 'base64').toString("ascii"));