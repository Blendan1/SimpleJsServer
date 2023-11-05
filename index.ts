#! /usr/bin/env node

import * as http from "http";
import * as fs from "fs";
import * as path from "path";

const [, , ...args] = process.argv;
const basePath = args[0];
const port = args[1] || 3000;

if (!basePath?.trim()) {
    const pjson = require('./package.json');
    console.log(
`command: sjss <path_to_js_dir> [port]
    
    version: ${pjson.version}
`);
    process.exit(0);
}

function getJsFile() {
    let file = "";
    const dir = fs.readdirSync(basePath);
    dir.forEach(f => {
        if (f.match(/\.js$/)) {
            const content = fs.readFileSync(path.join(basePath, f), "utf8")
            file += content;
        }
    });
    return file;
}

const server = http.createServer((rew, res) => {
    res.write(getJsFile());
    res.end();
});

console.log("Starting server with port " + port);

server.listen(port, () => {
    console.log("Server is running");
});