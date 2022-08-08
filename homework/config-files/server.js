const http = require("http");
const express = require("express");
const port = 3000;


const server = http.createServer((req, res)=>{
  if(req.url === '/'){
    res.write("hello from backend to frontend!");
    res.end();
  }
});


server.listen(port , () =>
  console.log(`app listening at http://localhost:${port}`
  ));
