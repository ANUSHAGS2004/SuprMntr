const http = require("http");

const server = http.createServer((req, res) => {

if(req.url === "/"){
res.write("Welcome to Hello Server");
}

else if(req.url === "/about"){
res.write("This is the About Page");
}

else if(req.url === "/contact"){
res.write("Contact us at support@example.com");
}

else{
res.write("404 Page Not Found");
}

res.end();

});

server.listen(3001, () => {
console.log("Server running at http://localhost:3001");
});