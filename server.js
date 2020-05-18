let http = require('http');
let url = require('url');
let fs = require('fs');

const PORT = "8080";

let server = http.createServer(traitReq);
server.listen(PORT);

function traitReq(){
    console.log("coucou game_JAme");
}