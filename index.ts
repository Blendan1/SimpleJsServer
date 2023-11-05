#! /usr/bin/env node

import * as http from "http";
import * as fs from "fs";
import * as path from "path";

const basePath = process.argv[0];
const port = process.argv[1] || 3000;

if(!basePath?.trim()) {
    throw new Error("no base path specified");
}

function getJsFile() {
    let file = ";"
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
    res.setDefaultEncoding('utf8');
    res.end();
});

console.log("Starting server with port " + port);

server.listen(port, () => {
    console.log("Server is running");
});