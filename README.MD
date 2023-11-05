# SimpleJsServer

This project serves as a simple node server that serves all the js files in a given folder

## Setup

### Requirements

NodeJs and npm must be installed

### Installation

```
npm install -g simple-js-server
```

### Starting

```
sjss <path_to_js_dir> [port]
```

when no port is specified it will use 3000


## THIS SHOULD NOT BE USED IN PRODUCTION OR TO SERVE END-USERS

This project was made for injecting js via a ngix reverse proxy,
specifically for injecting into the PhotoPrism frontend,
as a way to allow easy customisation and addon creation

See my PhotoPrism Projects for more details
